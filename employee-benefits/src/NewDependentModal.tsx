import React, { useState } from "react";
import { Button, Modal, ModalTitle, ModalFooter, ModalBody, Form } from "react-bootstrap";
import { Dependent } from "./types/dependent";


function NewDependentModal ({dependents, updateDependents, showAddDependentModal, setShowAddDependentModal}:
    {dependents: Dependent[], updateDependents: (vals: Dependent[]) => void, showAddDependentModal: boolean,
    setShowAddDependentModal: (show: boolean) => void}) {
    
        const [newDependentName, setNewDependentName] = useState(undefined as string|undefined);
        const [newDependentRelation, setNewDependentRelation] = useState(undefined as string|undefined);

        const addNewDependent = () => {
            if (!newDependentName || !newDependentRelation) {
                return;
            }
            const newDependent: Dependent = {
                name: newDependentName,
                relation: newDependentRelation
            };
            updateDependents([...dependents, newDependent]);
            setNewDependentName(undefined);
            setNewDependentRelation(undefined);
            setShowAddDependentModal(false);
        };

        return <>
            <Modal show={showAddDependentModal} onHide={() => setShowAddDependentModal(false)}>
                <ModalTitle>
                    <h3>Add new Dependents</h3>
                </ModalTitle>
                <ModalBody>
                    <Form>
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            value={newDependentName}
                            onChange={(e) => setNewDependentName(e.target.value)}
                            placeholder="Enter name" />
                        <Form.Label>Relation</Form.Label>
                        <Form.Select 
                            value={newDependentRelation} 
                            onChange={(e) => setNewDependentRelation(e.target.value)}>
                            <option>Choose relation</option>
                            <option>Mother</option>
                            <option>Father</option>
                            <option>Brother</option>
                            <option>Spouse</option>
                            <option>Child</option>
                        </Form.Select>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button disabled={!newDependentName || !newDependentRelation} variant="success" onClick={addNewDependent}>Add</Button>
                </ModalFooter>
            </Modal>
        </>    
}

export default NewDependentModal;