import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "../components/Navbar";
import LoginCard from "../components/LoginCard";
import {createUser} from '../actions/userAction'



const Home = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch()

  return (
    <div>
      <Navbar />
      <LoginCard user={user} />
      <button onClick={() => dispatch(createUser({username: 'test2', password: 'test2'}))}>SET</button>
    </div>
  );
};

export default Home;
