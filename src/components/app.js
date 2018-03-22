import React, { Component } from 'react';
import Welcome from './welcome/welcome';
import Login from './login/login';


class App extends Component {

  state = {
    isLoggedIn: false,
    user: ''
  }

  render() {
    return (
      this.state.isLoggedIn ?
      <Welcome user={this.state.user}/> :
      <Login/>

    );
  }
}

export default App;
