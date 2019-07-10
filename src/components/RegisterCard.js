import React from 'react';
import styled from 'styled-components';
import { SContainer, SCard, SActionButton, SFormGroup } from '../styles/global'

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
                            <input type="text"/>
                        </SFormGroup>
                        <SFormGroup>
                            <label htmlFor="">Email</label>
                            <input type="text"/>
                        </SFormGroup>
                        <SFormGroup>
                            <label htmlFor="">New Password</label>
                            <input type="password"/>
                        </SFormGroup>
                        <SFormGroup>
                            <label htmlFor="">Retype Password</label>
                            <input type="password"/>
                        </SFormGroup>
                        <SActionButton type="submit">Register</SActionButton>
                    </form>
                </SCardCustom>
            </SContainer>
        </React.Fragment>
    );
}
 
export default RegisterCard;