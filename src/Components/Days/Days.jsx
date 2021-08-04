import React from 'react';
import DayPicker from './DayPicker';
import DaySchedule from './DaySchedule';
import Grid from '@material-ui/core/Grid';

const Days = () => {

    return (
        <Grid container direction="column">
            <Grid item id="dayHeader">
                <h1>Days</h1>
            </Grid>
            <Grid item container direction="row" id="dayBody">
                <DayPicker />
                <DaySchedule />
            </Grid>
        </Grid>
    );
}

export default Days;