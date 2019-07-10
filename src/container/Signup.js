import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import RegisterCard from "../components/RegisterCard";
import {createUser} from '../actions/userAction'



const Signup = () => {
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch()
  
    return ( 
        <React.Fragment>
            <RegisterCard />
        </React.Fragment>
    );
}
 
export default Signup;