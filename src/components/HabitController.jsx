import React, { useState } from 'react';
import './HabitController.css';
import { Button, Modal, ModalHeader, ModalBody, ButtonGroup, ModalFooter, Form, Collapse, CardBody, Card } from 'reactstrap';
import CalendarReact from './CalendarReact';
import YearForest from './YearForest';
import ToggleSecret from './ToggleSecret';
import TallySheet from './TallySheet';
import keyHole from './images/keyhole.png';



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
    if (calendarDisplay === 'block') {
      setCalendarDisplay('none'); }
      else if(calendarDisplay === 'none') {
        setCalendarDisplay('block');
      }
    }


    const [tallySheetDisplay, setTallySheetDisplay] = useState('block');

    function hideTallySheet() {
      console.log('hi DE tallySheet :)');
      if (tallySheetDisplay === 'block') {
        setTallySheetDisplay('none'); }
        else if(tallySheetDisplay === 'none') {
          setTallySheetDisplay('block');
        }
      }

// Tally Sheet Collapse Logic
      const [isOpen, setIsOpen] = useState(false);

      const toggleCollapse = () => setIsOpen(!isOpen);

      const [treeTotal, setTreeTotal] = useState(0)

      function toggleTallySheet(habitEventList) {
        console.log('le click')
        console.log('habitEventList in Click', habitEventList);
        // console.log('habitEventList.habitEventList in SumTree', habitEventList.habitEventList);
        let treeBools = habitEventList.map(function (habit) {
          return habit.tree; });
        console.log('treeBools: ', treeBools);

        let tempSum = (treeBools.filter(a => a !== false)).length;
        console.log('tempSum: ', tempSum)
        setTreeTotal(tempSum);
        toggleCollapse();
        // return tempSum;
        }



        function keyClick(){
          console.log('its le click');

        }

      return (
        <div className="habitController">




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
                <br></br>
              </Form>
              <h5>{cSelected[0]}</h5>
              <h5>{cSelected[1]}</h5>
              <h5>{cSelected[2]}</h5>
            </ModalFooter>
          </Modal>
          <YearForest habitEventList={habitEventList}/>
          <ToggleSecret />
          <div className='tallySheet' style={{display: `${tallySheetDisplay}`}}>

          </div>
          <a className='hideCalendarButton' onClick={hideCalendar}></a>
          <div onClick={()=>toggleTallySheet(habitEventList)} habitEventList={habitEventList}>
            <div className='cloudPart1'></div>
            <div className='cloudPart2'></div>
              <Collapse isOpen={isOpen}>
                <Card>
                  <CardBody>
                      <div>
                        <h1>TallySheet</h1>
                        <h3>Total Trees: {treeTotal} </h3>
                        <h3>Percentage of Days With Trees: {(treeTotal/habitEventList.length)*100}%</h3>
                      </div>
                  </CardBody>
                </Card>
              </Collapse>
          </div>


          <a onClick={keyClick} class='keyHoleDiv'>
            <img src={keyHole}></img>
          </a>

        </div>
      );
    }

    export default HabitController;
    // <TallySheet habitEventList={habitEventList}/>
