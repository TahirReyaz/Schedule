// React and firebase components
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../firebase"
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/app";
// Components for different pages
import { SignIn } from "./auth/SignIn";
import NavBar from "./NavBar";
import Error404 from "./Error404";
import Landing from "./Landing/Landing";
import Days from "./Days/Days"

function App() {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);
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
