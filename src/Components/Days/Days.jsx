import React, { useState } from 'react';
import DayPicker from './DayPicker';
import DaySchedule from './DaySchedule';
import Grid from '@material-ui/core/Grid';

const Days = (props) => {
    const [selectedDay, setSelectedDay] = useState("Mon");
    const getDay = (day) => {
        console.log("Day is " + day);
        setSelectedDay(day);
    }

    return (
        <Grid container direction="column">
            <Grid item id="dayHeader">
                <h1>Days</h1>
                <h2>{props.username}</h2>
            </Grid>
            <Grid item container direction="row" id="dayBody">
                <DayPicker upDay={getDay}/>
                <DaySchedule userId={props.userId} day={selectedDay}/>
            </Grid>
        </Grid>
    );
}

export default Days;