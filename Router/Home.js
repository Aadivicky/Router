import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  return (
    <div>
      <Container fuild className='hom'>
        <Row>
          <Col><h1>This is a Home page for Router</h1>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Home;
