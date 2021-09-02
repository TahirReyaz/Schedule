import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import DayPicker from './DayPicker';
import DaySchedule from './DaySchedule';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";

const Days = (props) => {
    const [selectedDay, setSelectedDay] = useState("Mon");
    const history = useHistory();
    const getDay = (day) => {
        console.log("Day is " + day);
        setSelectedDay(day);
    }

    return (
        <Grid container direction="column">
            <Grid container item id="dayHeader">
                <Grid item>
                    <h1>Days</h1>
                    <h2>{props.username}</h2>
                </Grid>
                <Grid item>
                    <Button variant="outlined" onClick={() => history.push("dailyplanner")}>Months</Button>
                </Grid>
            </Grid>
            <Grid item container direction="row" id="dayBody">
                <DayPicker upDay={getDay}/>
                <DaySchedule userId={props.userId} day={selectedDay}/>
            </Grid>
        </Grid>
    );
}

export default Days;