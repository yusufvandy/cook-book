import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { SContainer } from '../styles/global'

const SButton = styled.button`
    border: none;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
`
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

const Navbar = (props) => {
    return (
        <React.Fragment>
            <SNavbar>
                <SContainerCustom>
                    <SBrand to="/">
                        My Cook App
                    </SBrand>
                    {(props.menus.length > 0) 
                        ?   <div>{props.menus.map(menu => 
                                <Link key={menu.url} style={{color: '#fff', marginLeft: 15}} to={menu.url}>{menu.menu}</Link>
                            )}</div>
                        :   <SButton>Logout</SButton>
                    }
                </SContainerCustom>
            </SNavbar>
        </React.Fragment>
    );
}
 
export default Navbar;