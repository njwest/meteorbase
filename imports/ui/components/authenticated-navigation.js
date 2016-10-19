import React from 'react';
import { browserHistory } from 'react-router';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

const userName = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.first} ${name.last}` : '';
};

export const AuthenticatedNavigation = () => (
  <div>
    <Nav>
      <IndexLinkContainer to="/">
        <NavItem eventKey={ 1 } href="/">Home</NavItem>
      </IndexLinkContainer>
      <LinkContainer to="/markerlist">
        <NavItem eventKey={ 2 } href="/markerlist">Climbs</NavItem>
      </LinkContainer>
      <LinkContainer to="/markers">
        <NavItem eventKey={ 2 } href="/markers">Add Climb</NavItem>
      </LinkContainer>
      {/* <IndexLinkContainer to="/map">
        <NavItem eventKey={ 1 } href="/">Map</NavItem>
      </IndexLinkContainer> */}
    </Nav>
    <Nav pullRight>
      <NavDropdown eventKey={ 3 } title={ userName() } id="basic-nav-dropdown">
        <MenuItem eventKey={ 3.1 } onClick={ handleLogout }>Logout</MenuItem>
      </NavDropdown>
    </Nav>
  </div>
);
