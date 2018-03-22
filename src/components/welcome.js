import React, { Component } from 'react';
import { sayHello } from '../../my-module/module-a';

class Welcome extends Component {
  state = {
    welcome: ''
  }

  componentDidMount(){
    this.setState({
      welcome: sayHello('Jesse')
    });
  }
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>My App</h1>
        <p>{this.state.welcome}</p>
      </div>

    );
  }
}

export default Welcome;
