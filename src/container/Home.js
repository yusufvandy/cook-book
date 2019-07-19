import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'

import Navbar from "../components/Navbar";
import Signup from "./Signup"
import Signin from "./Signin"



const Home = () => {
  const menuList = [
      {menu: 'Recipes', url: '/recipes'},
      {menu: 'Sign In', url: '/signin'},
      {menu: 'Sign Up', url: '/signup'},
      {menu: 'Ahmad Yusuf', url: '/profile'},
      {menu: 'Logout', url: '/'},
  ]
  return (
    <Router>
        <React.Fragment>
          <Navbar menus={menuList}/>
          <Switch>
            <Route path='/' exact component={home}/>
            <Route path='/recipes' component={recipes}/>
            <Route path='/signin' component={Signin}/>
            <Route path='/signup' component={Signup}/>
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

const mapStateToProps = (state) => {
  // console.log(state)
  return {

  }
}

export default connect(mapStateToProps)(Home);
