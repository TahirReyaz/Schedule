// React and firebase components
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
// import "@firebase/messaging";
// Components for different pages
import { SignIn } from "./auth/SignIn";
import NavBar from "./NavBar";
import Error404 from "./Error404";
import Landing from "./Landing/Landing";
import Days from "./Days/Days"
import DailyPlanner from "./DailyPlanner/DailyPlanner";

function App() {
  // Authorisation
  const auth = firebase.auth();
  const [user] = useAuthState(auth);
  // Push notifications
  // const messaging = firebase.messaging();
  // messaging.requestPermission()
  //   .then(() => {
  //     console.log("Permission Granted");
  //     return(messaging.getToken());
  //   })
  //   .then((token) => {
  //     console.log("Token: " + token);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/days">
            { user ? <Days username={user.displayName} userId={user.uid}/> : <SignIn />}
          </Route>
          <Route path="/dailyplanner">
            { user ? <DailyPlanner username={user.displayName} userId={user.uid}/> : <SignIn />}
          </Route>
          <Route path="/weeks">
            { user ? <Error404 /> : <SignIn />}
          </Route>
          <Route path="*">
            { user ? <Error404 /> : <SignIn />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
