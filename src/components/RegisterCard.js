import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react'
import { compose } from 'redux'
import { useDispatch, connect } from "react-redux";
// import { firestoreConnect } from "react-redux-firebase";
import { withFirestore, isLoaded, isEmpty } from 'react-redux-firebase'
import { withRouter } from 'react-router-dom'

import { SContainer, SCard, SActionButton, SFormGroup } from '../styles/global'
import {createUser} from '../actions/userAction'

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

const RegisterCard = ({props, users, firestore}) => {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        retypePassword: ''
    })
    
    const inputHandler = (e) => {
        const {value, name} = e.target;
        setUser({
            ...user,
            [name] : value
        })
    }
    

    useEffect(
        () => {
            const getUser = async () => {
                await firestore.get('users')
            }
            getUser()
        }, [firestore]
    )

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // prevent retypePassword props
        const deleteProps = (state, props) => {
            let {[props]: deleted, ...newState} = state;
            return newState;
        }
        let newUser = deleteProps(user, 'retypePassword')

        // i want to check the username is available or not on database
        // return error if double username
        // return to dispatch and display 'account has been created' and then redirect to home after 2 seconds

        const {username, email, password} = newUser
        dispatch(createUser({username, email, password}))
    }

    console.log(users)

    const usersList = !isLoaded(users)
    ? 'Loading'
    : isEmpty(users)
      ? 'Todo list is empty'
      : Object.keys(users).map((key, id) => (
          <div key={key} id={id}>{users[key].username}</div>
        ))
    
    return (
        <React.Fragment>
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
                            {(user.password === user.retypePassword && user.password !== '') ? <label style={{marginTop: 5, color: 'green'}}>Password is correct</label> : 
                            <label style={{marginTop: 5, color: 'red'}}>Wrong password, please retype password</label>}
                        </SFormGroup>
                        <SActionButton type="submit">Register</SActionButton>
                    </form>
                    {usersList}
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
    connect(state => ({
        users: state.firestore.ordered.users
    }))
  )(RegisterCard)