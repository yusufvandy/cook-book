import React from "react";
import Navbar from "./components/Navbar";
import LoginCard from "./components/LoginCard";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <div className="App">
      <Navbar />
      <LoginCard user={user} />
    </div>
  );
};

export default App;
