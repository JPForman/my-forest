import React, { useState } from 'react';
// import './HabitForm.css';
import { Button, Modal, ModalHeader, ModalBody, ButtonGroup, ModalFooter } from 'reactstrap';
import CalendarReact from './CalendarReact';



function HabitForm(props){
  const {
    buttonLabel = 'button label',
    className = 'class name',
    } = props;

  const [modal, setModal] = useState(false);
  const [dateTitle, setDateTitle] = useState('');

  function toggle(value) {
    let datePartial = value.toString().slice(0,15)
    setDateTitle(`${datePartial}`);
    setModal(!modal);
   }

 const [cSelected, setCSelected] = useState([]);

 const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
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

        <h5>Checkbox Buttons</h5>
             <ButtonGroup>
               <Button color="primary" onClick={() => onCheckboxBtnClick(1)} active={cSelected.includes(1)}>Add a tree :)</Button>
               <Button color="primary" onClick={() => onCheckboxBtnClick(2)} active={cSelected.includes(2)}>Flower Me</Button>
               <Button color="primary" onClick={() => onCheckboxBtnClick(3)} active={cSelected.includes(3)}>Grass</Button>
             </ButtonGroup>
             <p>Selected: {JSON.stringify(cSelected)}</p>

      </ModalFooter>
    </Modal>
    </div>
  );
}

export default HabitForm;
