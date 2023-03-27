import React, { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import { Employee } from "./types/employee";

function Employees() {
    const [employees, setEmployees] = useState([] as Employee[]);

    useEffect(() => {
        getEmployees();
        // auto-refresh every minute
        const interval = setInterval(() => getEmployees(), 60 * 1000);
        return () => {
          clearInterval(interval);
        };
    }, []);

    const getEmployees = () => {
        // API call to get a list of employees
        setEmployees([{
            name: 'Nimisha',
            salary: 2000 * 26,
            deductions: 0
        },{
            name: 'Sree',
            salary: 2000 * 26,
            deductions: 0
        }]);
    };

    return (
        <Container>
            <Row>
                <h1>Employees List</h1>
            </Row>
            <Row>
                <Table bordered>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Salary</th>
                            <th>Deductions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {employees.map((employee, index) => 
                        <tr key={employee.name}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                {employee.name}
                            </td>
                            <td>
                                {employee.salary}
                            </td>
                            <td>
                                {employee.deductions}
                            </td>
                        </tr>
                    )}
                </tbody>
                </Table>
            </Row>
        </Container>
    );
};

export default Employees;