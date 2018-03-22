import React, { Component } from 'react';
import { sayHello } from '../../../my-module/module-a';

class Welcome extends Component {
  state = {
    welcome: ''
  }

  componentDidMount(){
    this.setState({
      welcome: sayHello(this.props.user)
    });
  }
  render() {
    return (
      <div style={{textAlign: 'center', marginTop:20}}>
        <h1>My App</h1>
        <p>{this.state.welcome}</p>
      </div>

    );
  }
}

export default Welcome;
