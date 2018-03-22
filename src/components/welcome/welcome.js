import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'reactstrap';
import { sayHello } from '../../../my-module/module-a';

class Welcome extends Component {
  state = {
    welcome: ''
  }

  logout = () => {
    this.props.onLoggedOut();

  }

  componentDidMount() {
    this.setState({
      welcome: sayHello(this.props.user)
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== this.props.user) {
      this.setState({
        welcome: sayHello(nextProps.user)
      });
    }
  }


  render() {
    return (
      <div style={{textAlign: 'center', marginTop:20}}>
        <h1>My App</h1>
        <p>{this.state.welcome}</p>
        <Button color="primary" onClick={this.logout}>Log Out</Button>
      </div>

    );
  }
}
Welcome.propsType = {
  onLoggedOut: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired
}
export default Welcome;
