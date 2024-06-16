import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from "../img/logo.png";

function NavigationBar() {
    return (
      <Router>
        <NavBarLayout />
      </Router>
    );
  }
  
  function NavBarLayout() {
    let logo_size = 75;
    return <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="/">
            <img
              src={logo}
              width= {logo_size}
              height={logo_size}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>        
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/manage">Verwalten</Nav.Link>
            <Nav.Link href="/add">Hinzufügen</Nav.Link>

          </Nav>
          <Nav className='ms-auto'>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>;
  }

  export default NavigationBar;