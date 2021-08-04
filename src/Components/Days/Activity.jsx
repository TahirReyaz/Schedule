import React from 'react';
import Grid from '@material-ui/core/Grid';

const Activity = (props) => {

    return (
        <Grid item class="dayActivity">
            {props.name}
        </Grid>
    );
}

export default Activity;