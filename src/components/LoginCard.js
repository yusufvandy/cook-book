import React from 'react';
import styled from 'styled-components';
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useFirebase } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'

import { SContainer, SCard, SActionButton, SFormGroup } from '../styles/global'
import {signIn} from '../actions/authAction'

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


const LoginCard = () => {
    const dispatch = useDispatch()
    const firebaseState = useSelector(state => state.firebase);
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    
    const inputHandler = (e) => {
        const {value, name} = e.target;
        setUser({
            ...user,
            [name] : value
        })
    }

    const firebase = useFirebase();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(user)
        // dispatch(signIn(user, {firebase}))
    }

    return (
        firebaseState.auth.uid ? 
            <Redirect to="/"/>
        : 
        <React.Fragment>
            <SContainer>
                <SCardCustom>
                    <STitle>
                        Please Login
                    </STitle>
                    <form action="" onSubmit={onSubmitHandler}>
                        <SFormGroup>
                            <label htmlFor="">Email</label>
                            <input name="email" onChange={(e) => inputHandler(e)} type="email"/>
                        </SFormGroup>
                        <SFormGroup>
                            <label htmlFor="">Password</label>
                            <input name="password" onChange={(e) => inputHandler(e)} type="password" />
                        </SFormGroup>
                        <SActionButton type="submit">Login</SActionButton>
                    </form>
                </SCardCustom>
            </SContainer>
        </React.Fragment>
    );
}
 
export default LoginCard;