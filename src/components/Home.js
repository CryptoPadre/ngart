import styles from '../styles/Home.module.css'
import { Row, Container, Col } from 'react-bootstrap';

export default function Home(){
    return (
        <Container>
        <Row>
          <Col className='text-center'>
          <h1 className={styles.Name}>Niki Gavlider</h1></Col>
        </Row>
        <div className={`${styles.Intro} d-flex flex-column flex-md-row text-center`}>
          <Col ><h1>Artist</h1></Col>
          <Col><span>by</span></Col>
          <Col > <h2>Heart</h2></Col>
          <Col> <span>&</span></Col>
          <Col > <h3>Soul</h3></Col>
        </div>
      </Container>
    );
}