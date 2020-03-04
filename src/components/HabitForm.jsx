import React, { useState } from 'react';
// import './HabitForm.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CalendarReact from './CalendarReact';



function HabitForm(props){
  const {
    buttonLabel = 'button label',
    className = 'class name',
    modalTitle = ''
    } = props;

  const [modal, setModal] = useState(false);

  function toggle(props) {
  console.log('toggled');
  console.log('props inside toggle: ', props);
  let modalTitle = ''
  setModal(!modal);
 }

  return (
    <div>
    <CalendarReact toggle={toggle}/>
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
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
