import React, { Component} from 'react';

import { Card, Button, CardTitle, CardText, Form, FormGroup, Label, Input} from 'reactstrap';

import "./login.scss";

class Login extends Component {
  state = { someKey: 'someValue' };
  render() {
    return (
      <div className="my-login-wrapper">
        <Card body className="my-login-card">
            <CardTitle className="text-center">My App</CardTitle>
            <Form>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" placeholder="Your email" />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" placeholder="Your password" />
              </FormGroup>
            </Form>
            <Button color="primary">Login</Button>
        </Card>
      </div>
    )
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Login;
