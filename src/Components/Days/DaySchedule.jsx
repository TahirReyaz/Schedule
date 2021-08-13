import React from 'react';
import AddActivity from './AddActivity';
import Activity from './Activity';
import Grid from '@material-ui/core/Grid';
import db from '../../firebase';
import { useCollectionData } from "react-firebase-hooks/firestore";

const DaySchedule = (props) => {
    const scheduleRef = db.collection("users").doc(props.userId).collection("Days");
    const query = scheduleRef.where("name", "==", "adrak");
    const [scheduleDoc, loading, error] = useCollectionData(query); 

    return (
        <Grid container item direction="column" id="daySchedule" xs={9}>
            {/* The Grid which contains the mechanism to add new tasks */}
            <Grid item id="addActivityContainer">
                <AddActivity userId={props.userId}/>
            </Grid>
            {/* The list of tasks and activites */}
            {loading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {scheduleDoc && scheduleDoc[0].schedule.sort((a, b) => {// We will sort the array of objects using a compareFunction in sort() method
                if (a.time > b.time) {
                    return 1;
                }
                if (a.time < b.time) {
                    return -1;
                }
                return 0;
            }).map(task => (// We will now map the objects after sorting
                <Activity name={task.task} time={task.time} key={task.time}/>
            ))}
        </Grid>
    );
}

export default DaySchedule;