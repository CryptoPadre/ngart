import { Row, Container, Col } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import Whale from "../assets/whale.png";
import Panther from "../assets/panther.png";

export default function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col className="text-center">
            <h1 className={styles.Name}>Niki Gavlider</h1>
          </Col>
        </Row>

        <Col className={styles.Word1}>
          <h1>Artist</h1>
          <span>by</span>
        </Col>
        <Col className={styles.Word2}>
        
          <h2>Heart</h2>
       
          <span>&</span>
       
          <h2>Soul</h2>
        </Col>
      </Container>
      <div className={styles.Bg}>
        <div id="wrapper">
          <div className={styles.foreground}>
            <img src={Whale} alt="whale" />
          </div>

          <div className={styles.background}>
            <img alt="panther" src={Panther} />
          </div>
        </div>
      </div>
    </>
  );
}
