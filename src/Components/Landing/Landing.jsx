import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const Landing = () => {

    return (
        <Grid container direction="row" style={{height: "93vh"}}>
            <Grid item container style={{padding: "10px"}}>
                <Grid item xs={8}>
                    <h1>Plan your life before Aizen</h1>
                    <h1>or Madara do.</h1>
                    <h1>Plan your day</h1>
                    <h1>before you waste it.</h1>
                    <Link to="/days">
                        <Button variant="outlined" color="primary">Sign up/ Log in</Button>
                    </Link>
                </Grid>
                <Grid item xs={4}>
                    <img src="images/undraw_time_management.svg" alt="" style={{height: "50vh", width: "auto"}}/>
                </Grid>
            </Grid>
            <Grid item>
                <img src="images/vector_buildings.svg" alt="" style={{width: "100%", boxSizing: "unset"}}/>
            </Grid>
        </Grid>
    );
}

export default Landing;