import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { withFirebase} from 'react-redux-firebase'

import Navbar from "../components/Navbar";
import Signup from "./Signup"
import Signin from "./Signin"



const Home = ({firebase}) => {
  const firebaseState = useSelector(state => state.firebase);

  // console.log(firebase)
  console.log(firebaseState)

  const logoutHandler = () => {firebase.auth().signOut()
    .then(() => {
      console.log('logout success')
    })
    .catch((err) => {
      console.log('logout error', err)
    })
  }


  return (
    firebaseState.profile.isEmpty ? 
    <div>Loading</div>
    : <Router>
        <React.Fragment>
          <Navbar
            isEmpty={firebaseState.auth.isEmpty}
            photoURL={firebaseState.profile.photoURL}
            logoutHandler={logoutHandler}
          />
          <Switch>
            <Route path='/' exact component={home}/>
            <Route path='/recipes' component={recipes}/>
            <Route path='/signin' component={Signin}/>
            <Route path='/signup' component={Signup}/>
          </Switch>
        </React.Fragment>
    </Router>
  );
};

const home = () => {
  return<h1>This is HOME page</h1>
}

const recipes = () => {
  return<h1>This is recipes page</h1>
}


export default withFirebase(Home);