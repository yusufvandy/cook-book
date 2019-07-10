import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from "../components/Navbar";
import LoginCard from "../components/LoginCard";
import {createUser} from '../actions/userAction'



const Home = () => {
  const menuList = [
      {menu: 'Recipes', url: '/recipes'},
      {menu: 'Sign In', url: '/signin'},
      {menu: 'Sign Up', url: '/signup'},
  ]
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch()

  return (
    <Router>
        <React.Fragment>
          <Navbar menus={menuList}/>
          <Switch>
            <Route path='/' exact component={home}/>
            <Route path='/recipes' component={recipes}/>
            <Route path='/signup' component={signup}/>
            {/* <LoginCard user={user} /> */}
            {/* <button onClick={() => dispatch(createUser({username: 'test2', password: 'test2'}))}>SET</button> */}
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

const signup = () => {
  return<h1>This is signup page</h1>
}


export default Home;
