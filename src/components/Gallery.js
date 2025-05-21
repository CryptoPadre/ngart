import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Frida from '../assets/frida.png';
import styles from '../styles/Gallery.module.css'

export default function Gallery(){
    return (
        <Container>
      <Row className='justify-content-center'>
        <Col xs={8} md={6} lg={6} className={styles.Col}>
          <Image  src={Frida} thumbnail />
          <p className='text-center'>Price</p>
        </Col>
        <Col xs={8} md={6} lg={6} className={styles.Col}>
          <Image  src={Frida} thumbnail />
        </Col>
        <Col xs={8} md={6} lg={6} className={styles.Col}>
          <Image  src={Frida} thumbnail />
        </Col>
        <Col xs={8} md={6} lg={6} className={styles.Col}>
          <Image  src={Frida} thumbnail />
        </Col>
      </Row>
    </Container>
    )
}