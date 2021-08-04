import React from 'react';
import Activity from './Activity';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const DaySchedule = () => {

    return (
        <Grid container direction="column" id="daySchedule" xs={9}>
        {/* The Grid which contains the mechanism to add new tasks */}
        <Grid container item direction="row" id="addActivityContainer">
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
        {/* The list of tasks and activites */}
        <Activity name="Activity 1"/>
        <Activity name="Activity 2"/>
    </Grid>
);
}

export default DaySchedule;