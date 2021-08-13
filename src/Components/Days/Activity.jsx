import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const Activity = (props) => {

    return (
        <Grid container item direction="row" className="dayActivity">
            <Grid item xs={2}>{props.time}</Grid>
            <Grid item xs={9}>{props.name}</Grid>
            <Grid item xs={1}>
                <Button variant="outlined" endIcon={<DeleteIcon />}>Del</Button>
            </Grid>
        </Grid>
    );
}

export default Activity;