import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../images/logo_v6.png';

const Styles = styled.div`
  .navbar {
    background-color: #f2fcff;
  }

  .logo {
    width: 72px;
  }
`;

function NavigationBar() {
  return (
    <Styles>
      <Navbar collapseOnSelect expand='lg'>
        <Navbar.Brand href='/'>
          <img className='logo' src={logo}></img>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse />
        <Nav>
          <Nav.Item>
            <Nav.Link href='/'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/diensten'>Diensten</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/tarieven'>Tarieven</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/over-ons'>Over ons</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/hulp-op-afstand'>Hulp op afstand</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/klantenservice'>Klantenservice</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </Styles>
  );
}

export default NavigationBar;
