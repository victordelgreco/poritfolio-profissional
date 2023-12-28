import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { PiLinkedinLogoFill } from "react-icons/pi";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquareGithub } from "react-icons/fa6";
import '../Nav/Nav.css'

export default function Footer() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Victor Del Greco</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          <Nav>
            <div href="#deets"><FaSquareGithub className='nav-icone-social-midia'/></div>
            <div href="#deets"><PiLinkedinLogoFill className='nav-icone-social-midia'/></div>
            <div href="#deets"><PiInstagramLogoFill className='nav-icone-social-midia'/></div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



