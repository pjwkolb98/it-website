import React from 'react';
import styled from 'styled-components';
import { Container, Col, Row } from 'react-bootstrap';
import logo from '../images/logo_v6.png';

const Styles = styled.div`
  .footer-container-full {
    background-color: #f2fcff;
  }
  .logo {
    width: 72px;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;

function FooterBar() {
  return (
    <Styles>
      <Container fluid className='footer-container-full'>
        <Container className='footer-container'>
          <Row className='footer-row'>
            <Col>
              <h3>Contact</h3>
              <ul>
                <li>telefoon</li>
                <li>openingstijden</li>
                <li>mail</li>
              </ul>
            </Col>
            <Col>
              <h3>Links</h3>
              <ul>
                <li>contact</li>
                <li>FAQ</li>
                <li>voorwaarden</li>
              </ul>
            </Col>
            <Col>
              <h3>Social</h3>
              <ul>
                <li>facebook</li>
                <li>insta</li>
                <li>snapchat</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </Styles>
  );
}

export default FooterBar;
