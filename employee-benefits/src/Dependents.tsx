import React, { useState } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import NewDependentModal from "./NewDependentModal";
import { Dependent } from "./types/dependent";
import { Employee } from "./types/employee";

function Dependents({employee, setEmployee, calculateDeductions}: 
  {employee: Employee, setEmployee:(e: Employee) => void, calculateDeductions:(empName: string, deps: Dependent[]) => number}) {
  const [showAddDependentModal, setShowAddDependentModal] = useState(false);

  const removeDependent = (dependentName: string, dependentRelation: string) => {
    const deps = employee.dependents.filter(d => d.name !== dependentName && d.relation !== dependentRelation);
    //   API call to remove dependent
    setEmployee({...employee,
      dependents: deps,
      deductions: calculateDeductions(employee.name, deps)});
  };

  const renderDependendents = () => {
    return employee.dependents.map((dependent) => {
      return (
        <Col key={dependent.name} align="center">
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src="profile.jpeg" />
            <Card.Body>
              <Card.Title>{dependent.name}</Card.Title>
              <Card.Text>Relation: {dependent.relation}</Card.Text>
              <Button variant="danger" onClick={() => removeDependent(dependent.name, dependent.relation)}>Remove dependent</Button>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  };

  const updateDependents = (deps: Dependent[]) => {
    // API call to update employee information
    setEmployee({...employee, dependents: deps, deductions: calculateDeductions(employee.name, deps)});
  };

  return (
    <>
        <Container>
            <Row>
                <Col>
                    <h3>Dependents</h3>
                </Col>
                <Col align="right">
                    <Button variant="success" onClick={() => setShowAddDependentModal(true)}>Add Dependent</Button>
                </Col>
            </Row>
            <Row>
                {renderDependendents()}
            </Row>
        </Container>
        <NewDependentModal 
            dependents={employee.dependents} 
            updateDependents={updateDependents}
            showAddDependentModal={showAddDependentModal} 
            setShowAddDependentModal={setShowAddDependentModal} />
    </>
  );
}

export default Dependents;
