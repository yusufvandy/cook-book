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
        <div>
            <Navbar menus={menuList}/>
            <LoginCard user={user} />
            <button onClick={() => dispatch(createUser({username: 'test2', password: 'test2'}))}>SET</button>
        </div>
    </Router>
  );
};


export default Home;
