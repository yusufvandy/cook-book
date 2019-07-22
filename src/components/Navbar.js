import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { SContainer } from '../styles/global'

const SBrand = styled(Link)`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
`
const SNavbar = styled.div`
    background-image: linear-gradient(to right, #ff758c 0%, #ff7eb3 100%);
    width: 100%;
    color: white;
    padding: 15px 0;
`
const SContainerCustom = styled(SContainer)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const SLink = styled(Link)`
    color: #fff;
    margin-left: 15px;
`

const Navbar = (props) => {
    return (
        <React.Fragment>
            <SNavbar>
                <SContainerCustom>
                    <SBrand to="/">
                        My Cook App
                    </SBrand>
                    { props.isEmpty ? 
                        <div>
                            <SLink to="/recipes">Explore Recipes</SLink>
                            <SLink to="/signin">Sign In</SLink>
                            <SLink to="/signup">Sign Up</SLink>
                        </div>
                        :
                        <div>
                            <SLink to="/recipes">Explore Recipes</SLink>
                            <SLink to="/profile">{props.email}</SLink>
                            <SLink to="" onClick={props.logoutHandler}>Logout</SLink>
                        </div>
                    }
                </SContainerCustom>
            </SNavbar>
        </React.Fragment>
    );
}
 
export default Navbar;