import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Frida from '../assets/frida.png';
import styles from '../styles/Gallery.module.css'

export default function Gallery(){
    return (
        <Container>
      <Row >
        <Col xs={8} md={6} lg={6}>
          <Image  src={Frida} thumbnail />
        </Col>
        <Col xs={8} md={6} lg={6}>
          <Image  src={Frida} thumbnail />
        </Col>
        <Col xs={8} md={6} lg={6}>
          <Image  src={Frida} thumbnail />
        </Col>
        <Col xs={8} md={6} lg={6}>
          <Image  src={Frida} thumbnail />
        </Col>
      </Row>
    </Container>
    )
}