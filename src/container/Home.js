import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { compose } from 'redux'
import { connect, useSelector } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { withFirebase, firebaseConnect, populate } from 'react-redux-firebase'

import Navbar from "../components/Navbar";
import Signup from "./Signup"
import Signin from "./Signin"



const Home = () => {
  const [isLoaded, setLoaded] = useState(false)
  const firebase = useSelector(state => state.firebase);
  // const firebase = withFirebase();


  useEffect(
    () => {
      // if (!user.auth.isEmpty){
      //   localStorage.setItem('isAuthReady', true)
      //   // setUserEmail({userEmail : user.auth.email})
      //   localStorage.setItem('userEmail', user.auth.email)
      // }
      // firebase.auth().onAuthStateChanged((user) => {
      //   setUser({user : user.email})
      // });
      setLoaded({isLoaded : firebase.auth.isLoaded})
    }, [firebase]
  )

  console.log(firebase)

  // console.log(firebase)

  // const email = localStorage.getItem('userEmail')

  // console.log(user)
  // const menuList = !isLoaded(props.firebase.auth.isLoaded)
  // ? 'Loading'
  // : isEmpty(props.firebase.auth.isEmpty)
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
            {/* <LoginCard user={user} /> */}
            {/* <button onClick={() => dispatch(createUser({username: 'test2', password: 'test2'}))}>SET</button> */}
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

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    // email: state.firebase.auth.email
  }
}

// export default Home;
// export default connect(mapStateToProps)(Home);
export default withFirebase(Home);

// export default compose(
//   firebaseConnect(() => [
//     'todos' // { path: '/todos' } // object notation
//   ]),
//   connect((state) => ({
//     todos: state.firebase.data.todos,
//     // profile: state.firebase.profile // load profile
//   }))
// )(Home)
