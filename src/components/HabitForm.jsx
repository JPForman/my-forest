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

  function handleSayHi(event) {
    console.log('say hi hi');
    console.log('cSelected: ', cSelected);
  }

  return (
    <div>
    <CalendarReact toggle={toggle}/>
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}>{dateTitle}</ModalHeader>
      <ModalBody>
        Todaysies
      </ModalBody>
      <ModalFooter>
            <form onSubmit={handleSayHi}>
             <ButtonGroup>
               <Button color="primary" onClick={() => onCheckboxBtnClick('a tree')} active={cSelected.includes(1)}>Add a tree :)</Button>
               <Button color="primary" onClick={() => onCheckboxBtnClick('a flower')} active={cSelected.includes(2)}>Flower Me</Button>
               <Button color="primary" onClick={() => onCheckboxBtnClick('some grass')} active={cSelected.includes(3)}>Grass</Button>
             </ButtonGroup>
             <button type='submit'>true</button>
           </form>
             <h5>{cSelected[0]}</h5>

             <h5>{cSelected[1]}</h5>

             <h5>{cSelected[2]}</h5>

      </ModalFooter>
    </Modal>
    </div>
  );
}

export default HabitForm;
