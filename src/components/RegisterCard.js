import React from 'react';
import styled from 'styled-components';
import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";

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


const RegisterCard = () => {
    // const user = useSelector(state => state.auth.user);
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
    
    return (
        <React.Fragment>
            <SContainer>
                <SCardCustom>
                    <STitle>
                        Register
                    </STitle>
                    <form action="">
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
                </SCardCustom>
            </SContainer>
        </React.Fragment>
    );
}
 
export default RegisterCard;