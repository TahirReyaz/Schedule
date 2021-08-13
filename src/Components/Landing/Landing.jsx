import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const Landing = () => {

    return (
        <Grid>
            <h1>Plan your life before Aizen or Madara do.</h1>
            <h1>Plan your day before you waste it.</h1>
            <Link to="/days">
                <Button variant="outlined" color="primary">Sign up/ Log in</Button>
            </Link>
        </Grid>
    );
}

export default Landing;