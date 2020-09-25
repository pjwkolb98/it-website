import React from 'react';
import styled from 'styled-components';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../images/logo_v6.png';

const Styles = styled.div`
  .navbar {
    background-color: #f2fcff;
  }
  .logo {
    width: 72px;
  }
`;

function FooterBar() {
  return (
    <Styles>
      <Navbar className='footer fixed-bottom'>
        <Navbar.Brand href='/'>
          <img className='logo' src={logo} alt='logo'></img>
        </Navbar.Brand>
      </Navbar>
    </Styles>
  );
}

export default FooterBar;
