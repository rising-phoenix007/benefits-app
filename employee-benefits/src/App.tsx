import React from "react";
import { Container, Row } from "react-bootstrap";
import "./App.css";
import Profile from "./Profile";

function App() {
  return (
    <Container style={{ marginTop: "2rem" }}>
      <Row>
        <Profile />
      </Row>
    </Container>
  );
}

export default App;
