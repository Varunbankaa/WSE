import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import '../styles/telugu-font.css';

const Navbar = () => {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container className="d-flex align-items-center">
        <BootstrapNavbar.Brand as={NavLink} to="/" className="d-flex align-items-center flex-column">
          <div style={{ fontSize: '1.5rem', fontWeight: '700', fontFamily: "'Noto Serif Telugu', serif", color: '#ffd700', lineHeight: '1.1' }}>
            పొట్ట పల్గ
          </div>
          <div style={{ fontSize: '0.85rem', fontStyle: 'italic', fontFamily: "'Noto Sans Telugu', sans-serif", color: '#ffa500' }}>
            మెక్కి పొండి రా బాబు
          </div>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/menu">
              Menu
            </Nav.Link>
            <Nav.Link as={NavLink} to="/reservation">
              Reservation
            </Nav.Link>
            <Nav.Link as={NavLink} to="/orderonline">
              Order Online
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={NavLink} to="/stats">
              Stats
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
