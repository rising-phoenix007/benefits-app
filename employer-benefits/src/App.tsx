import React from 'react';
import './App.css';
import { Container, Row } from 'react-bootstrap';
import Employees from './Employees';

function App() {
  return (
    <Container style={{ marginTop: "2rem" }}>
      <Row>
        <Employees />
      </Row>
    </Container>
  );
}

export default App;
