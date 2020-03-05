import React, { useState } from 'react';
// import './HabitForm.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CalendarReact from './CalendarReact';



function HabitForm(props){
  const {
    buttonLabel = 'button label',
    className = 'class name',
    } = props;

  const [modal, setModal] = useState(false);
  const [dateTitle, setDateTitle] = useState('');

  function toggle(value) {
  setDateTitle(`${value}`);
  setModal(!modal);
 }


  return (
    <div>
    <CalendarReact toggle={toggle}/>
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}>{dateTitle}</ModalHeader>
      <ModalBody>
        What did you do today?
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>Tree Me!</Button>{' '}
        <Button color="secondary" onClick={toggle}>Flower power :)</Button>
      </ModalFooter>
    </Modal>
    </div>
  );
}

export default HabitForm;
