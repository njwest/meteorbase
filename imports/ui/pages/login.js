import React from 'react';
import { Link } from 'react-router';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { handleLogin } from '../../modules/login';
import { Grid } from 'react-bootstrap';

export class Login extends React.Component {
  componentDidMount() {
    handleLogin({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return <Grid>
    <Row>
      <Col md={ 4 } mdPush={ 4 }>
        <h4 className="page-header">LOGIN</h4>
        <form ref="login" className="login" onSubmit={ this.handleSubmit }>
          <FormGroup>
            
            <FormControl
              type="email"
              ref="emailAddress"
              name="emailAddress"
              placeholder="Email Address"
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>
            </ControlLabel>
            <FormControl
              type="password"
              ref="password"
              name="password"
              placeholder="Password"
            />
            <Link className="pull-right" to="/recover-password">Forgot Password?</Link>
          </FormGroup>
          <br />
          <Button type="submit" bsStyle="success">Login</Button>
        </form>
      </Col>
    </Row>
    </Grid>;
  }
}
