import React from 'react';
import db from '../../firebase';
import firebase from "firebase/app";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const Activity = (props) => {
    const handleDelete = async() => {
        const scheduleItem = { 
            color: props.color,
            task: props.name, 
            time: props.time
        };
        await db.collection("users").doc(props.userId).collection("Days").doc("Mon").update({
            schedule: firebase.firestore.FieldValue.arrayRemove(scheduleItem)
        });
        console.log("schedule deleted");
    }

    return (
        <Grid container item direction="row" className="dayActivity">
            <Grid item xs={2}>{props.time}</Grid>
            <Grid item xs={9}>{props.name}</Grid>
            <Grid item xs={1}>
                <Button variant="outlined" endIcon={<DeleteIcon style={{color: "red"}}/>} onClick={handleDelete}>Del</Button>
            </Grid>
        </Grid>
    );
}

export default Activity;