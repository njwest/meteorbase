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
      <Col xs={ 12 } sm={ 6 } md={ 4 }>
        <h4 className="page-header">Login</h4>
        <form ref="login" className="login" onSubmit={ this.handleSubmit }>
          <FormGroup>
          
            <FormControl
              type="email"
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
            <ControlLabel>
              <Link className="pull-right" to="/recover-password">forgot password?</Link>
            </ControlLabel>
          </FormGroup>
          <Button type="submit" className='btn'>LOGIN</Button>
        </form>
      </Col>
    </Row>
    </Grid>;
  }
}
