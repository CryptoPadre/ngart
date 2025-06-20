import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

export default function NavBar() {
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  return (
    <>
      <Navbar
        expand="sm"
        expanded={expanded}
        className={`bg-body-tertiary ${styles.NavBar}`}
        fixed="top"
      >
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/" className={styles.NavLink}>
            NGArt
          </Navbar.Brand>
          <Navbar.Toggle
          className={styles.Hamburger}
            aria-controls="basic-navbar-nav"
            ref={ref}
            onClick={() => setExpanded(!expanded)}
          > <i className="fa-solid fa-bars"></i></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={NavLink} to="/" end>
                <i className="fa-solid fa-house">Home</i>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/gallery">
                <i className="fa-solid fa-palette">Gallery</i>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                <i className="fa-solid fa-address-card">About Me</i>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                <i className="fa-solid fa-envelope">Contact</i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
