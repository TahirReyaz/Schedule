import React, { useState } from "react";
import db from '../../firebase';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import firebase from "firebase/app";

const AddActivity = (props) => {
    const [time, setTime] = useState("");
    const [activity, setActivity] = useState("");
    // const [activityColor, setActivityColor] = useState("red");
    const activityColor= "red";
    const handleSubmit = async(event) => {
        event.preventDefault();
        const scheduleItem = { 
            time: time, 
            task: activity, 
            color: activityColor
        };
        await db.collection("users").doc(props.userId).collection("Days").doc("Mon").update({
            schedule: firebase.firestore.FieldValue.arrayUnion(scheduleItem)
        });
        console.log("schedule added");
        setActivity("");
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
                        onChange={(event) => setTime(event.target.value)} 
                        required
                    />
                </Grid>
                {/* Activity */}
                <Grid item xs={9}>
                    <TextField
                        label="Activity"
                        type="text"
                        value={activity}
                        onChange={(event) => setActivity(event.target.value)} 
                        required
                        fullWidth
                    />
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