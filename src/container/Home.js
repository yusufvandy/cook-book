import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { withFirebase} from 'react-redux-firebase'

import Navbar from "../components/Navbar";
import Signup from "./Signup"
import Signin from "./Signin"



const Home = () => {
  const firebase = useSelector(state => state.firebase);
  const menuList = [
    {menu: 'Recipes', url: '/recipes'},
    {menu: 'Sign In', url: '/signin'},
    {menu: 'Sign Up', url: '/signup'},
    {menu: firebase.auth.email, url: '/profile'},
    {menu: 'Logout', url: '/'},
  ]


  return (
    !firebase.auth.isLoaded ? 
    <div>Loading</div>
    : <Router>
        <React.Fragment>
          <Navbar menus={menuList}/>
          <Switch>
            <Route path='/' exact component={home}/>
            <Route path='/recipes' component={recipes}/>
            <Route path='/signin' component={Signin}/>
            <Route path='/signup' component={Signup}/>
          </Switch>
            {firebase.auth.email}
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