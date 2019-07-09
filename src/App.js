import React from 'react';
import Navbar from './components/Navbar'
import LoginCard from './components/LoginCard'
import {useSelector} from 'react-redux'

const App = () => {
  const username = useSelector(state => state.auth.username)
  return (
    <div className="App">
      {username}
      <Navbar />
      <LoginCard />
    </div>
  );
}

export default App;

