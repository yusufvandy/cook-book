import React from 'react';
import { useSelector } from 'react-redux'
import { withFirebase } from 'react-redux-firebase'

import { SBrand, SNavbar, SContainerCustom, SLink, SCircleImg, SFlexCenter } from './NavbarCss'


const Navbar = ({ firebase }) => {
    const firebaseState = useSelector(state => state.firebase);

    const logoutHandler = () => {
        firebase.auth().signOut()
        .then(() => {
          console.log('logout success')
        })
        .catch((err) => {
          console.log('logout error', err)
        })
    }
    
    return (
        <React.Fragment>
            <SNavbar>
                <SContainerCustom>
                    <SBrand to="/">
                        My Cook App
                    </SBrand>
                    { firebaseState.auth.isEmpty ? 
                        <SFlexCenter>
                            <SLink to="/explore">Explore</SLink>
                            <SLink to="/signin">Sign In</SLink>
                            <SLink to="/signup">Sign Up</SLink>
                        </SFlexCenter>
                        :
                        <SFlexCenter>
                            <SLink to="/explore">Explore</SLink>
                            <SLink to="/create-recipe">Create Recipes</SLink>
                            <SLink to="/profile"><SCircleImg src={firebaseState.profile.photoURL} alt=""/></SLink>
                            <SLink to="" onClick={ logoutHandler }>Logout</SLink>
                        </SFlexCenter>
                    }
                </SContainerCustom>
            </SNavbar>
        </React.Fragment>
    );
}
 
export default withFirebase(Navbar);