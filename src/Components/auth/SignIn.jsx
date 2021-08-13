import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"
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
        <Grid container justifyContent="center">
            <Button onClick={signInWithGoogle} variant="outlined">Sign In With Google</Button>
            <Link to="/"><Button variant="outlined">Home</Button></Link>
        </Grid>
    );
}

// const SignOut = () => {
//     return auth.currentUser && (
//         <Button onClick={() => auth.singOut()}>Sign Out</Button>
//     )
// }

export { SignIn };