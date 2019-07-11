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


const LoginCard = () => {
    return (
        <React.Fragment>
            <SContainer>
                <SCardCustom>
                    <STitle>
                        Please Login
                    </STitle>
                    <form action="">
                        <SFormGroup>
                            <label htmlFor="">Username</label>
                            <input type="text"/>
                        </SFormGroup>
                        <SFormGroup>
                            <label htmlFor="">Password</label>
                            <input type="password" />
                        </SFormGroup>
                        <SActionButton type="submit">Login</SActionButton>
                    </form>
                </SCardCustom>
            </SContainer>
        </React.Fragment>
    );
}
 
export default LoginCard;