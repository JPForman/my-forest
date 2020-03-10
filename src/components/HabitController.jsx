import React, { useState } from 'react';
import './HabitController.css';
import { Button, Modal, ModalHeader, ModalBody, ButtonGroup, ModalFooter, Form, Collapse, CardBody, Card } from 'reactstrap';
import CalendarReact from './CalendarReact';
import YearForest from './YearForest';
import KeySignIn from './KeySignIn';
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

    const treeLeft = 135*Math.random()+5
    const treeBottom = 45*Math.random()+40

    let newHabit = {
      date: dateTitle,
      tree: cSelected.includes('a tree'),
      treeLeft: treeLeft,
      treeBottom: treeBottom,
      flower: cSelected.includes('a flower'),
      grass: cSelected.includes('some grass'),
    }
    console.log('newHabit: ', newHabit);

    setHabitEventList(habitEventList => [...habitEventList, newHabit]);
    setModal(!modal);
    setCSelected([]);
    console.log(habitEventList);
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
      const [grassTotal, setGrassTotal] = useState(0)
      const [flowerTotal, setFlowerTotal] = useState(0)

      function toggleTallySheet(habitEventList) {
        let treeBools = habitEventList.map(function (habit) {
          return habit.tree; });
        let tempTreeSum = (treeBools.filter(a => a !== false)).length;
        setTreeTotal(tempTreeSum);

        let grassBools = habitEventList.map(function (habit) {
          return habit.grass; });
          console.log('grassBools: ', grassBools);
        let tempGrassSum = (grassBools.filter(a => a !== false)).length;
        setGrassTotal(tempGrassSum);

        let flowerBools = habitEventList.map(function (habit) {
          return habit.flower; });
          console.log('flowerBools: ', flowerBools);
        let tempFlowerSum = (flowerBools.filter(a => a !== false)).length;
        console.log('TEMPFLOWERSUM: ', tempFlowerSum);
        setFlowerTotal(tempFlowerSum);

        toggleCollapse();
        }




        const [keyDisplay, setkeyDisplay] = useState('none');

        function ToggleKey() {
          if (keyDisplay === 'block') {
            setkeyDisplay('none'); }
            else if(keyDisplay === 'none') {
              setkeyDisplay('block');
            }
          }


      return (
        <div className='fullBody'>

          <div className="hideCalendarDiv" onClick={hideCalendar}></div>
          <YearForest habitEventList={habitEventList} className='yearForest'/>


          <div className='calendarReact' style={{display: `${calendarDisplay}`}}>
            <CalendarReact className='calendar' toggle={toggle}/>
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




          <div onClick={()=>toggleTallySheet(habitEventList)} habitEventList={habitEventList}>
            <div className='cloudPart1'></div>
            <div className='cloudPart2'></div>
              <Collapse isOpen={isOpen}>
                <Card>
                  <CardBody>
                      <div className='tallySheet'>
                        <h1 className='tallyTitle'>TallySheet</h1>

                        <div className="treeTally">
                          <h3>Total Trees: {treeTotal} </h3>
                          <h5>Percentage of Marked Days With Trees: {Math.round((treeTotal/habitEventList.length)*100)}%</h5>
                        </div>

                        <div className="flowerTally">
                        <h3>Total Flowers: {flowerTotal} </h3>
                        <h5>Percentage of Marked Days With Flowers: {Math.round((flowerTotal/habitEventList.length)*100)}%</h5>
                        </div>

                        <div className='grassTally'>
                        <h3>Total Grass: {grassTotal} </h3>
                        <h5>Percentage of Marked Days With Grass: {Math.round((grassTotal/habitEventList.length)*100)}%</h5>
                        </div>
                      </div>
                  </CardBody>
                </Card>
              </Collapse>
          </div>


          <a onClick={ToggleKey} className='keyHoleDiv'>
            <img className='keyHole' src={keyHole}></img>
          </a>

          <div className='keyDiv' style={{display: `${keyDisplay}`}}>
            <KeySignIn />
          </div>





        </div>
      );
    }

    export default HabitController;
    // <TallySheet habitEventList={habitEventList}/>
