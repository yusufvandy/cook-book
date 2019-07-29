import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react'
import { compose } from 'redux'
import { useDispatch, connect, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom'
// import { firestoreConnect } from "react-redux-firebase";
import { withFirestore, withFirebase, isLoaded, isEmpty } from 'react-redux-firebase'
import { withRouter } from 'react-router-dom'

import { SContainer, SCard, SActionButton, SFormGroup } from '../styles/global'
import {createUser} from '../store/actions/userAction'

const STitle = styled.h1`
    font-size: 20px;
    margin: 0;
    color: #555;
    margin-bottom: 25px;
`
const SCardCustom = styled(SCard)`
    width: 500px;
    text-align: center;
    margin: auto;
    margin-top: 50px;
`

const RegisterCard = ({history, users, firestore, recipes, firebase}) => {
    const firebaseState = useSelector(state => state.firebase);

    const dispatch = useDispatch();
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        retypePassword: '',
        photoURL: 'https://avatars0.githubusercontent.com/u/25471957?s=460&v=4'
    })
    
    const inputHandler = (e) => {
        const {value, name} = e.target;
        setUser({
            ...user,
            [name] : value
        })
    }
    

    // useEffect(
    //     () => {
    //         const getUser = async () => {
    //             await firestore.onSnapshot('users')
    //             await firestore.get({collection:'recipes', doc: 'myfood'})
    //         }
    //         getUser();
    //     }, [firestore]
    // )

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // i want to check the username is available or not on database
        // return error if double username
        // return to dispatch and display 'account has been created' and then redirect to home after 2 seconds

        const {retypePassword, ...newUser} = user
        dispatch(createUser(newUser, { firebase, firestore, history }))
    }
    const {username, email, password} = user

    const usersList = !isLoaded(users)
    ? 'Loading'
    : isEmpty(users)
      ? 'Todo list is empty'
      : Object.keys(users).map((key, id) => (
          <div key={key} id={id}>{users[key].username}</div>
        ))


    const recipesList = !isLoaded(users)
    ? 'Loading'
    : isEmpty(recipes)
      ? 'Todo list is empty'
      : Object.keys(recipes).map((recipe) => (
          <div key={recipe}>{recipes[recipe].test}</div>
        ))

    const passwordValidation = 
        (user.password === user.retypePassword && user.password !== '')
        ? <label style={{marginTop: 5, color: 'green'}}>Password is correct</label>
        : <label style={{marginTop: 5, color: 'red'}}>Wrong password, please retype password</label>
    
    return (
        firebaseState.auth.uid ? 
            <Redirect to="/"/>
        : <React.Fragment>
            <SContainer>
                <SCardCustom>
                    <STitle>
                        Register
                    </STitle>
                    <form action="" onSubmit={(e) => onSubmitHandler(e)}>
                        <SFormGroup>
                            <label htmlFor="">Username</label>
                            <input type="text" name="username" onChange={(e) => inputHandler(e)}/>
                        </SFormGroup>
                        <SFormGroup>
                            <label htmlFor="">Email</label>
                            <input type="email" name="email" onChange={(e) => inputHandler(e)}/>
                        </SFormGroup>
                        <SFormGroup>
                            <label htmlFor="">New Password</label>
                            <input type="password" name="password" onChange={(e) => inputHandler(e)}/>
                        </SFormGroup>
                        <SFormGroup>
                            <label htmlFor="">Retype Password</label>
                            <input type="password" name="retypePassword" onChange={(e) => inputHandler(e)}/>
                            {passwordValidation}
                        </SFormGroup>
                        <SActionButton type="submit">Register</SActionButton>
                    </form>
                    {/* {usersList}
                    <h1>Recipes</h1>
                    {recipesList} */}
                </SCardCustom>
            </SContainer>
        </React.Fragment>
    );
}
 
// export default compose(
//     firestoreConnect(() => ['users']),
//     connect((state) => ({
//         users: state.firestore.data.users
//     }))
// )(RegisterCard);

export default compose(
    withRouter,
    withFirestore,
    withFirebase,
    connect(state => ({
        users: state.firestore.ordered.users,
        recipes: state.firestore.ordered.recipes
    }))
  )(RegisterCard)