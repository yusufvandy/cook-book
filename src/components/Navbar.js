import React from 'react';
import styled from 'styled-components';
import { SContainer } from '../styles/global'

const SButton = styled.button`
    border: none;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
`
const SBrand = styled.div`
    font-size: 18px;
    font-weight: bold;
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

const Navbar = () => {
    return (
        <React.Fragment>
            <SNavbar>
                <SContainerCustom>
                    <SBrand>
                        My Cook App
                    </SBrand>
                    <SButton>
                        Logout
                    </SButton>
                </SContainerCustom>
            </SNavbar>
        </React.Fragment>
    );
}
 
export default Navbar;