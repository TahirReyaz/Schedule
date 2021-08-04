import React from 'react';
import AddActivity from './AddActivity';
import Activity from './Activity';
import Grid from '@material-ui/core/Grid';

const DaySchedule = () => {

    return (
        <Grid container direction="column" id="daySchedule" xs={9}>
        {/* The Grid which contains the mechanism to add new tasks */}
        <Grid item id="addActivityContainer">
            <AddActivity />
        </Grid>
        {/* The list of tasks and activites */}
        <Activity name="Activity 1"/>
        <Activity name="Activity 2"/>
    </Grid>
);
}

export default DaySchedule;