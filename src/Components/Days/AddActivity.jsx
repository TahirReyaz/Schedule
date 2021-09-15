import React, { useState } from "react";
import db from '../../firebase';
import firebase from "firebase/app";
// import ColourLabel from "./ColourLabel";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const AddActivity = (props) => {
    const [time, setTime] = useState("");
    const [activity, setActivity] = useState("");
    const [activityColor, setActivityColor] = useState("#6C63FF");
    const colours = [
        {
            value: "#6C63FF",
            label: "🔵"
            // label: <ColourLabel color="#6C63FF" />
        },
        {
            value: "red",
            label: "🔴"
            // label: <ColourLabel color="red" />
        },
        {
            value: "yellow",
            label: "🟡"
            // label: <ColourLabel color="yellow" />
        },
        {
            value: "green",
            label: "🟢"
            // label: <ColourLabel color="green" />
        },
    ];
    const handleSubmit = async(e) => {
        e.preventDefault();
        const scheduleItem = { 
            time: time, 
            task: activity, 
            color: activityColor
        };
        await db.collection("users").doc(props.userId).collection("Days").doc("Mon").update({
            schedule: firebase.firestore.FieldValue.arrayUnion(scheduleItem)
        });
        console.log("schedule added");
        setActivity("");// Clear the text box
        setActivityColor("#6C63FF");// Reset the colour
    }
    return (
        <form onSubmit={handleSubmit}>
            <Grid container direction="row">
                {/* Time */}
                <Grid item xs={2}>
                    <TextField
                        id="time"
                        label="Time"
                        type="time"
                        value={time}
                        onChange={e => setTime(e.target.value)} 
                        required
                    />
                </Grid>
                {/* Activity */}
                <Grid item xs={8}>
                    <TextField
                        label="Activity"
                        type="text"
                        value={activity}
                        onChange={(e) => setActivity(e.target.value)} 
                        required
                        fullWidth
                    />
                </Grid>
                {/* Colour Picker */}
                <Grid item xs={1}>
                    <TextField
                        id="selectColor"
                        select
                        label="Colour"
                        value={activityColor}
                        onChange={e => setActivityColor(e.target.value)}
                    >
                        {colours.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                {/* Add Button */}
                <Grid item xs={1} style={{padding: "5px"}}>
                    <Button type="submit" endIcon={<AddIcon />} variant="outlined" id="addActivityBtn">
                        Add
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default AddActivity;