import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const AddActivity = () => {
    const [time, setTime] = useState("");
    const [activity, setActivity] = useState("");
    const handleSubmit = async(event) => {
        event.preventDefault();
        // const scheduleItem = { 
        //     time: time, 
        //     activity: activity, 
        // };
        // await blogsRef.add(scheduleItem);
        // console.log("schedule added");
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
                        defaultValue="07:30"
                        required
                    />
                </Grid>
                {/* Activity */}
                <Grid item xs={9}>
                    <TextField
                        label="Activity"
                        type="text"
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