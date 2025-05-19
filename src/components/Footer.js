import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
      <Navbar className={styles.Footer} fixed="bottom">
        <Container fluid>
          <Nav className="justify-content-center flex-grow-1 pe-3">
            <Nav.Link href="#action1"><i class="fa-brands fa-instagram"></i></Nav.Link>
            <Nav.Link href="#action2"><i class="fa-brands fa-tiktok"></i></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}
