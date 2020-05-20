import React from 'react';
import { Button, Input, Modal, ModalHeader, ModalBody, ButtonGroup, ModalFooter, Form, Collapse, CardBody, Card } from 'reactstrap';
import './HabitController.css';

export default function EventModal({modal, toggle, dateTitle, handleAddHabitEvent, cSelected, setSpecialTreeNote, setSpecialFlowerNote, setSpecialGrassNote, onCheckboxBtnClick}) {
  return (
    <div className="modalWrapper">
      <Modal isOpen={modal} toggle={toggle} >
            <div className='eventModal'>
              <p>the sweet day of {dateTitle.toLowerCase()} deserves the following</p>
              <Form onSubmit={handleAddHabitEvent}>
                <div className='modalButtons'>
                  <ButtonGroup>
                    <Button className='modalButton modalTreeButton' onClick={() => onCheckboxBtnClick('a tree')} active={cSelected.includes(1)}>Add a tree :)</Button>
                    <Button className='modalButton modalFlowerButton' onClick={() => onCheckboxBtnClick('a flower')} active={cSelected.includes(2)}>Flower Me</Button>
                    <Button className='modalButton' onClick={() => onCheckboxBtnClick('some grass')} active={cSelected.includes(3)}>Grass</Button>
                  </ButtonGroup>
                </div>

                <Input
                  type="text"
                  className='specialNote'
                  name="specialTreeNote"
                  onChange={e=> setSpecialTreeNote(e.target.value)}
                  placeholder="special tree note?" />

                <Input
                  type="text"
                  name="specialFlowerNote"
                  onChange={e=> setSpecialFlowerNote(e.target.value)}
                  placeholder="special flower note?" />

                <Input
                  type="text"
                  name="specialNote"
                  onChange={e=> setSpecialGrassNote(e.target.value)}
                  placeholder="special grass note?" />

                  <button className='submitModal' type='submit' value='submit'>true</button>

              </Form>
              <div className='selectedModals'>
                <h5>lovely</h5>
                <h5>{cSelected[0]}</h5>
                <h5>{cSelected[1]}</h5>
                <h5>{cSelected[2]}</h5>
              </div>
          </div>
          </Modal>
    </div>
  )
}
