import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Nav.Link href="/auth/google">Log In</Nav.Link>
      default:
        return <Nav.Link href="/api/logout">Log Out</Nav.Link>;
    }
  }
  render () {
    return (
      <Navbar expand='lg' bg='dark' variant='dark'>
        <Link to={this.props.auth ? '/surveys' : '/'}>
          <Navbar.Brand>Emaily</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Item>
              <Nav.Link href="#">Link 1</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav>
          <Nav.Item>
              <Nav.Link href="#">Link 2</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Item>
              {this.renderContent()}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header);