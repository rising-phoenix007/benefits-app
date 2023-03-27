import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import Dependents from "./Dependents";
import { Dependent } from "./types/dependent";
import { Employee } from "./types/employee";

function Profile() {
    const [employee, setEmployee] = useState(undefined as Employee|undefined);
    const [updatedEmployee, setUpdatedEmployee] = useState(undefined as Employee|undefined);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        // API call to get employee information
        setEmployee({
            name: 'Nimisha Peddakam',
            salary: 2000 *  26,
            deductions: 0,
            dependents: []
        });
        setUpdatedEmployee(employee);
    }, []);

    const updateEmployee = () => {
        if (!updatedEmployee) {
            return;
        }
        // API call to update employee information
        setEmployee({...updatedEmployee, deductions: calculateDeductions(updatedEmployee.name, updatedEmployee.dependents)});
        setIsEditing(false);    
    };

    const calculateDeductions = (empName:  string, deps: Dependent[]) => {
        const employeeCost = 1000 - (empName.toLowerCase().startsWith('a') ? 1000*10/100 : 0);
        let totalDependentsCost = 0;
        deps.forEach(dependent => {
            if (dependent.name.toLowerCase().startsWith('a')) {
                totalDependentsCost += 500 - (500*10/100);
            } else {
                totalDependentsCost += 500;
            }
        });
        return employeeCost + totalDependentsCost;
    };

    const renderRow = (header: string, data: string|number) => {
        return (
            <tr>
                <td>
                    <b>{header}</b>
                </td>
                <td>
                    {data}
                </td>
            </tr>

        );
    };

    const renderEditableName = (emp: Employee) => {
        return (
            <tr>
                <td>
                    <b>Name</b>
                </td>
                <td>
                    <Row>
                        <Col>
                            {isEditing ? 
                                <Form.Control size="sm" type="text" value={updatedEmployee?.name ?? ''} onChange={(e) => setUpdatedEmployee({...emp, name: e.target.value})}></Form.Control> : 
                                emp.name}
                        </Col>
                        <Col style={{textAlign: 'right'}}>
                            {isEditing ? 
                                <>
                                    <Button variant="success" onClick={updateEmployee} style={{marginRight: '1rem'}}>Save</Button>
                                    <Button variant="danger" onClick={() => setIsEditing(false)}>Cancel</Button>
                                </> :
                                <Button variant="primary" onClick={() => {
                                    setIsEditing(true);
                                    setUpdatedEmployee(employee);
                                }}>Edit</Button>}
                        </Col>
                    </Row>
                </td>
            </tr>
        );
    };

    const renderProfileInformation = (emp: Employee) => {
        return <>
            <h1>Profile Information</h1>
            <Table size="sm" bordered>
                <tbody>
                    {renderEditableName(emp)}
                    {renderRow('Salary (per year)', emp.salary)}
                    {renderRow('Deductions', emp.deductions)}
                </tbody>
            </Table>
        </>;
    };

    return <>
        {employee && <Container>
            <Row>
                {renderProfileInformation(employee)}
            </Row>
            <Dependents employee={employee} setEmployee={setEmployee} calculateDeductions={calculateDeductions}/>
        </Container>}
    </>
}

export default Profile;