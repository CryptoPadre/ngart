import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      {[false, 'sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className={`${styles.NavBar} bg-body-tertiary mb-3`} fixed="top">
          <Container fluid>
            <Navbar.Brand as={NavLink} to="/" className={styles.NavLink}>
              NGArt
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={NavLink} to="/" end><i className="fa-solid fa-house"></i></Nav.Link>
                  <Nav.Link as={NavLink} to="/gallery"><i className="fa-solid fa-palette"></i></Nav.Link>
                  <Nav.Link as={NavLink} to="/about"><i className="fa-solid fa-address-card"></i></Nav.Link>
                  <Nav.Link as={NavLink} to="/contact"><i className="fa-solid fa-envelope"></i></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
