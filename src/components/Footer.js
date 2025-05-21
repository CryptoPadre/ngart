import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <Navbar className={styles.Footer} fixed="bottom">
      <Container fluid>
        <Nav className="justify-content-center flex-grow-1 pe-3">
          <Nav.Link
            href="https://www.instagram.com/ngart_nikigavlider/?igsh=NmR1aG03NzVsZ3Yw#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </Nav.Link>
          <Nav.Link
            href="https://www.tiktok.com/@ngart_nikig?_r=1&_d=secCgYIASAHKAESPgo8pR%2FvzYrTjiu81CAPoUT3Ktpwvpq8DGddKwUTPOVUQ7fesmq0xDbxUVTJTc6UcD5MHrD%2BHRDHn7JgHo%2BFGgA%3D&_svg=2&checksum=f6dd9ffbbfffd5d12e9cbd3eb22ddefe905e10f63c0dbb8dba76b45353adb2d0&sec_uid=MS4wLjABAAAA4VfdCS6c0xGp_SzrjrYfHDNjDCUPc6ivG970nG2kk0uAmRkQAiabwRubOG9-J_nf&sec_user_id=MS4wLjABAAAA4VfdCS6c0xGp_SzrjrYfHDNjDCUPc6ivG970nG2kk0uAmRkQAiabwRubOG9-J_nf&share_app_id=1233&share_author_id=7404380195391898656&share_link_id=20731CC6-DCE6-4495-A26B-6C1B64C82CB3&sharer_language=hu&social_share_type=4&source=h5_m&timestamp=1747859032&tt_from=copy&u_code=efk2718007dg0l&ug_btm=b8727%2Cb0&user_id=7404380195391898656&utm_campaign=client_share&utm_medium=ios&utm_source=copy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-tiktok"></i>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
