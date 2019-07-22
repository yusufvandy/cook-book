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
const SCircleImg = styled.img`
    width: 35px;
    height: 35px;
    object-fit: cover;
    border-radius: 50px;
`
const SFlexCenter = styled.div`
    display: flex;
    align-items: center
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
                        <SFlexCenter>
                            <SLink to="/explore">Explore</SLink>
                            <SLink to="/signin">Sign In</SLink>
                            <SLink to="/signup">Sign Up</SLink>
                        </SFlexCenter>
                        :
                        <SFlexCenter>
                            <SLink to="/explore">Explore</SLink>
                            <SLink to="/create-recipe">Create Recipes</SLink>
                            <SLink to="/profile"><SCircleImg src={props.photoURL} alt=""/></SLink>
                            <SLink to="" onClick={props.logoutHandler}>Logout</SLink>
                        </SFlexCenter>
                    }
                </SContainerCustom>
            </SNavbar>
        </React.Fragment>
    );
}
 
export default Navbar;