import React, { Component } from 'react';
import Welcome from './welcome/welcome';
import Login from './login/login';


class App extends Component {

  state = {
    isLoggedIn: false,
    user: ''
  }
  onLoggedInChanged = (isLoggedIn, user) => {
    //This is ES6 shorthand for below:
    // this.setState({
    //   isLoggedIn: isLoggedIn,
    //   user: user
    // })
    this.setState({isLoggedIn, user})
  }


  render() {
    return (
      this.state.isLoggedIn ?
      <Welcome user={this.state.user} onLoggedOut={()=>this.onLoggedInChanged(false)}/> :
      <Login onLoggedIn={this.onLoggedInChanged}/>

    );
  }
}

export default App;
