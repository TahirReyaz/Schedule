import React from 'react';
import Grid from '@material-ui/core/Grid';

const DayPicker = (props) => {
    const dayList = [
        {
            value: "Sun",
            label: "Sunday"
        },
        {
            value: "Mon",
            label: "Monday"
        },
        {
            value: "Tue",
            label: "Tuesday"
        },
        {
            value: "Wed",
            label: "Wednusday"
        },
        {
            value: "Thu",
            label: "Thursday"
        },
        {
            value: "Fri",
            label: "Friday"
        },
        {
            value: "Sat",
            label: "Saturday"
        },
    ];
    
    const dayPicked = (e) => {
        e.target.parentNode.childNodes.forEach((day) => {
            day.style.backgroundColor = "";
        })
        e.target.style.backgroundColor = "#999";
        props.upDay(e.target.id);
    }
    const newDay = () => {
        console.log("new day");
    }

    return (
        <Grid container item id="dayPicker" xs={3} alignItems="center" justifyContent="space-around">
            {dayList.map(day => (
                <button key={day.value} className="day" onClick={dayPicked} id={day.value}>
                    {day.label}
                </button>
            ))}
            <button className="day" onClick={newDay}>
                +
            </button>
        </Grid>
    );
}

export default DayPicker;