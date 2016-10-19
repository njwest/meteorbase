import React from 'react';
import { Link } from 'react-router';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button, Grid, Image } from 'react-bootstrap';
import { handleSignup } from '../../modules/signup';

export class Signup extends React.Component {
  componentDidMount() {
    handleSignup({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return <Grid>
    <Row>
      <Col md={ 4 } mdPush={ 4 }>
        <h4 className="page-header">SIGN UP</h4>
        <form ref="signup" className="signup" onSubmit={ this.handleSubmit }>
          <Row>
            <Col xs={ 6 } sm={ 6 }>
              <FormGroup>
                <FormControl
                  type="text"
                  ref="firstName"
                  name="firstName"
                  placeholder="first name"
                />
              </FormGroup>
            </Col>
            <Col xs={ 6 } sm={ 6 }>
              <FormGroup>
                <FormControl
                  type="text"
                  ref="lastName"
                  name="lastName"
                  placeholder="last name"
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <FormControl
              type="text"
              ref="emailAddress"
              name="emailAddress"
              placeholder="email"
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              type="password"
              ref="password"
              name="password"
              placeholder="password"
            />
          </FormGroup>
          <Button type="submit" bsStyle="success">Sign Up</Button>
        </form>
        <p>Already have an account? <Link to="/login">Log In</Link>.</p>
      </Col>
    </Row>
  </Grid>;
  }
}
