import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { Card, Button, CardTitle, CardText, Form, FormGroup, Label, Input, Alert} from 'reactstrap';

import "./login.scss";

class Login extends Component {
  state = {
    email: '',
    password: '',
    loginError: false
  };

  //This is ES6 short hand for below ES5 :
  // handleInputChange = (event) => {
  //   var name = event.target.name;
  //   var value = event.target.value;
  //   var partialState = {};
  //   partialState[name] = value;
  //   this.setState(partialState);
  // }

  handleInputChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    });
  }

  login = () => {
    //You should call login API here actually, this is just pure front-end demo
    if (this.state.password !== '123456') {
      this.setState({loginError:true, password:''});
    } else {
      this.props.onLoggedIn(true, this.state.email);
    }
  }

  render() {
    const {email, password, loginError} = this.state;
    return (
      <div className="my-login-wrapper">
        <Card body className="my-login-card">
            <CardTitle className="text-center">My App</CardTitle>
            <Form>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" placeholder="Your email" value={email} onChange={this.handleInputChange}/>
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" placeholder="Your password" value={password} onChange={this.handleInputChange}/>
              </FormGroup>
            </Form>
            <Button color="primary" onClick={this.login}>Login</Button>
            { loginError && <Alert color="danger" style={{marginTop:10}}>Password Incorrect! Hint: 123456</Alert>
            }
        </Card>
      </div>
    )
  }
}

Login.propTypes = {
  onLoggedIn: PropTypes.func.isRequired
}

export default Login;
