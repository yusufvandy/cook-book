import React, {Component} from 'react';
import Navbar from './components/Navbar'
import LoginCard from './components/LoginCard'
import {connect} from 'react-redux'

class App extends Component {
  render(){
    console.log(this.props)
    return (
      <div className="App">
        <Navbar />
        <LoginCard />
      </div>
    );

  }
}

const mapStateToProps = (state) => {
  return{
    username: state.auth.username
  }
}

export default connect(mapStateToProps)(App);

