import React from 'react';
import db from '../../firebase';
import { useCollectionData } from "react-firebase-hooks/firestore";
import Push from "push.js";
import moment from "moment";
import AddActivity from './AddActivity';
import Activity from './Activity';
import Grid from '@material-ui/core/Grid';

const DaySchedule = (props) => {
    const scheduleArray= [];
    let currentTime= moment().format("HH:mm");
    let currentTask, nextTask, currentTaskTime, nextTaskTime, count=0;
    const scheduleRef = db.collection("users").doc(props.userId).collection("Days");
    const query = scheduleRef.where("name", "==", "adrak");
    const [scheduleDoc, loading, error] = useCollectionData(query); 
    scheduleDoc && scheduleDoc[0].schedule.sort((a, b) => {// Sort the array of objects using a compareFunction in sort() method
        if (a.time > b.time) {
            return 1;
        }
        if (a.time < b.time) {
            return -1;
        }
        return 0;
    }).forEach(schedule => {
        scheduleArray.push(schedule);
    });

    // Show the notification when the app loads
    scheduleArray.forEach(task => {
        if(currentTime <= task.time && count===0) {
            nextTask = task.task;
            nextTaskTime = task.time;
            count++;
        } else if(currentTime > task.time) {
            currentTask = task.task;
            currentTaskTime = task.time;
        }
    });
    Push.create("Now " + currentTaskTime + "- " + currentTask + 
    "\nNext " + nextTaskTime + "- " + nextTask, {
        tag: "Schedule"
    });

    // Check it every 60 secs and show the notification when its time for next task
    setInterval(() => {
        currentTime= moment().format("HH:mm");
        if(currentTime === nextTaskTime) {
            count=0;
            scheduleArray.forEach(task => {
                if(currentTime < task.time && count===0) {
                    nextTask = task.task;
                    nextTaskTime = task.time;
                    count++;
                } else if(currentTime >= task.time) {
                    currentTask = task.task;
                    currentTaskTime = task.time;
                }
            });
            Push.create("Now " + currentTaskTime + "- " + currentTask + 
            "\nNext " + nextTaskTime + "- " + nextTask, {
                tag: "Schedule"
            });
        }
    }, 60000);

    return (
        <Grid container item direction="column" id="daySchedule" xs={9}>
            {/* The Grid which contains the mechanism to add new tasks */}
            <Grid item id="addActivityContainer">
                <AddActivity userId={props.userId}/>
            </Grid>
            {/* The list of tasks and activites */}
            {loading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {scheduleArray.map(task => (// We will now map the objects after sorting
                <Activity name={task.task} time={task.time} userId={props.userId} color={task.color} key={task.time}/>
            ))}
        </Grid>
    );
}

export default DaySchedule;