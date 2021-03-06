import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../images/logo_v6.png';

const Styles = styled.div`
  .header-container-full {
    background-color: #f2fcff;
  }

  .logo {
    width: 72px;
  }

  .header-container {
    padding-left: initial;
    padding-right: initial;
  }
`;

function HeaderBar() {
  return (
    <Styles>
      <Container fluid className='header-container-full'>
        <Container className='header-container'>
          <Navbar collapseOnSelect expand='lg'>
            <Navbar.Brand href='/'>
              <img className='logo' src={logo} alt='logo' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto'>
                <Nav.Item>
                  <Nav.Link>
                    <Link to='/'>Home</Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link to='/diensten'>Diensten</Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link to='/tarieven'>Tarieven</Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link to='/over-ons'>Over ons</Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link to='/hulp-op-afstand'>Hulp op afstand</Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link to='/klantenservice'>Klantenservice</Link>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Container>
    </Styles>
  );
}

export default HeaderBar;
