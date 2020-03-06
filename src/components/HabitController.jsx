import React, { useState } from 'react';
import './HabitController.css';
import { Button, Modal, ModalHeader, ModalBody, ButtonGroup, ModalFooter, Form } from 'reactstrap';
import CalendarReact from './CalendarReact';
import YearForest from './YearForest';
import TallySheet from './TallySheet';



function HabitController(props){

  // Master Habit Event List
  const [habitEventList, setHabitEventList] = useState([]);

  // Modal Stuff
  const [modal, setModal] = useState(false);
  const [dateTitle, setDateTitle] = useState('');

  function toggle(value) {
    let datePartial = value.toString().slice(0,15)
    setDateTitle(`${datePartial}`);
    setModal(!modal);
  }

  // Checkbox Form Stuff
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

  //  TRYING TO FIGURE OUT DUPLICATE DATES
  // if(habitEventList.find(x=>x.date === dateTitle)) {
  //   console.log('this date exists!');
  //   console.log('before slice habitEventList', habitEventList);
  //   let repeatDateIndex = habitEventList.findIndex(x=>x.date === dateTitle)
  //   let slicedList = habitEventList.slice(repeatDateIndex, repeatDateIndex+1)
  //   let newHabit = {
  //     date: dateTitle,
  //     tree: cSelected.includes('a tree'),
  //     flower: cSelected.includes('a flower'),
  //     grass: cSelected.includes('some grass'),
  //   }
  //   setHabitEventList(habitEventList => [slicedList, newHabit]);
  //   console.log('before slice habitEventList', habitEventList);
  // }

  function handleAddHabitEvent(event) {
    event.preventDefault();

    let newHabit = {
      date: dateTitle,
      tree: cSelected.includes('a tree'),
      flower: cSelected.includes('a flower'),
      grass: cSelected.includes('some grass'),
    }

    setHabitEventList(habitEventList => [...habitEventList, newHabit]);
    setModal(!modal);
    setCSelected([]);
  }

  const [calendarDisplay, setCalendarDisplay] = useState('block');

  function hideCalendar() {
    console.log('le click hideCalendar');
    console.log('calendarDisplay start click: ', calendarDisplay);
    if (calendarDisplay === 'block') {
      console.log('calendarDisplay true branch');
      setCalendarDisplay('none'); }
    else if(calendarDisplay === 'none') {
      console.log('calendarDisplay none branch')
      console.log('calendarDisplay pre set: ', calendarDisplay)
      setCalendarDisplay('block');
    }
    console.log('calendarDisplay post set: ', calendarDisplay);
  }

  console.log('calendarDisplay before return: ', calendarDisplay)
  return (
    <div>
      <div className='calendarReact' style={{display: `${calendarDisplay}`}}>
        <CalendarReact toggle={toggle}/>
      </div>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>{dateTitle}</ModalHeader>
        <ModalBody>
          Todaysies
        </ModalBody>
        <ModalFooter>
          <Form onSubmit={handleAddHabitEvent}>
            <ButtonGroup>
              <Button color="primary" onClick={() => onCheckboxBtnClick('a tree')} active={cSelected.includes(1)}>Add a tree :)</Button>
              <Button color="primary" onClick={() => onCheckboxBtnClick('a flower')} active={cSelected.includes(2)}>Flower Me</Button>
              <Button color="primary" onClick={() => onCheckboxBtnClick('some grass')} active={cSelected.includes(3)}>Grass</Button>
            </ButtonGroup>
            <button type='submit'>true</button>
          </Form>
          <h5>{cSelected[0]}</h5>

          <h5>{cSelected[1]}</h5>

          <h5>{cSelected[2]}</h5>
        </ModalFooter>
      </Modal>
      <YearForest habitEventList={habitEventList}/>
      <TallySheet habitEventList={habitEventList}/>
      <button onClick={hideCalendar}>click</button>
    </div>
  );
}

export default HabitController;
