import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
// import "firebase/firestore"
import Grid from "@material-ui/core/Grid"
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const auth = firebase.auth();
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return(
        <Grid container direction="row" style={{height: "93vh"}}>
            <Grid item container style={{padding: "10px"}}>
                <Grid item xs={8} className="taglineContainer">
                    <h1>Plan your life before Aizen</h1>
                    <h1>or Madara do.</h1>
                    <h1>Plan your day</h1>
                    <h1>before you waste it.</h1>
                    <Button onClick={signInWithGoogle} id="googleSignInButton">Sign In With Google</Button>
                    <Link to="/"><Button className="themeButton">Home</Button></Link>
                </Grid>
                <Grid item xs={4}>
                    <img src="images/undraw_time_management.svg" alt="" style={{height: "50vh", width: "auto"}}/>
                </Grid>
            </Grid>
            <Grid item>
                <img src="images/vector_buildings.svg" alt="" style={{width: "100%"}}/>
            </Grid>
        </Grid>
    );
}

// const SignOut = () => {
//     return auth.currentUser && (
//         <Button onClick={() => auth.singOut()} className="themeButton">Sign Out</Button>
//     )
// }

export { SignIn };