import React from "react";
import Navbar from "./components/Navbar";
import LoginCard from "./components/LoginCard";
import { useSelector, useDispatch } from "react-redux";
import {createUser} from './actions/userAction'

const App = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch()

  return (
    <div className="App">
      <Navbar />
      <LoginCard user={user} />
      <button onClick={() => dispatch(createUser({username: 'test2', password: 'test2'}))}>set</button>
    </div>
  );
};

export default App;
