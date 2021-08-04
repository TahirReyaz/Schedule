import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Error404 = () => {
    return(
        <Grid container justifyContent="center">
            <Grid item>
                <h1>Error 404</h1>
                <h2>Not Found</h2>
                <Link to="/">
                    <Button variant="outlined">Home</Button>
                </Link>
            </Grid>
        </Grid>
    )
}

export default Error404;