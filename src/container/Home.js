import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { withFirebase } from 'react-redux-firebase'

import Navbar from "../components/Navbar";
import Signup from "./Signup"
import Signin from "./Signin"



const Home = (props) => {
  // const user = useSelector(state => state.auth.user);
  // const firebase = withFirebase();

  // const menuList = !isLoaded(state)
  // ? 'Loading'
  // : isEmpty(state)
  //   ? 'Todo list is empty'
  //   : [
  //     {menu: 'Recipes', url: '/recipes'},
  //     {menu: 'Sign In', url: '/signin'},
  //     {menu: 'Sign Up', url: '/signup'},
  //     // {menu: state.firebase.auth.email, url: '/profile'},
  //     {menu: 'Logout', url: '/'},
  // ]


  const menuList = [
    {menu: 'Recipes', url: '/recipes'},
    {menu: 'Sign In', url: '/signin'},
    {menu: 'Sign Up', url: '/signup'},
    // {menu: state.firebase.auth.email, url: '/profile'},
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
  console.log(state)
  return {
    email: state.firebase.auth.email
  }
}

export default connect(mapStateToProps)(Home);
// export default withFirebase(Home);
