import React, { useState } from 'react';
import './HabitController.css';
import CalendarReact from './CalendarReact';
import YearForest from './YearForest';
import KeySignIn from './KeySignIn';
import keyHole from './images/keyhole.png';
import Opener from './Opener';
import TallySheet from './TallySheet.jsx';
import EventModal from './EventModal.jsx';



function HabitController(props){

  // Master Habit Event List
  const [habitEventList, setHabitEventList] = useState([]);



  // Event Modal Stuff
  const [modal, setModal] = useState(false);
  const [dateTitle, setDateTitle] = useState('');

  function toggle(value) {
    let datePartial = value.toString().slice(0,15)
    setDateTitle(`${datePartial}`);
    setModal(!modal);
  }

  // Event Checkbox Form
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

  // Event Special Note Form Hooks
  const [specialTreeNote, setSpecialTreeNote] = useState('');
  const [specialFlowerNote, setSpecialFlowerNote] = useState('');
  const [specialGrassNote, setSpecialGrassNote] = useState('');


  // New Event
  function handleAddHabitEvent(event) {
    event.preventDefault();


    const treeLeft = 135*Math.random()+5
    const treeBottom = 45*Math.random()+40
    const grassRight = 175*Math.random()-30
    const grassTop = 48*Math.random()-18

    let newHabit = {
      date: dateTitle,
      tree: cSelected.includes('a tree'),
      treeLeft: treeLeft,
      treeBottom: treeBottom,
      flower: cSelected.includes('a flower'),
      grass: cSelected.includes('some grass'),
      grassRight: grassRight,
      grassTop: grassTop,
      specialTreeNote: specialTreeNote,
      specialGrassNote: specialGrassNote,
      specialFlowerNote: specialFlowerNote,
    }

    setHabitEventList(habitEventList => [...habitEventList, newHabit]);
    setModal(!modal);
    setCSelected([]);
    setSpecialGrassNote('');
    setSpecialFlowerNote('');
    setSpecialTreeNote('');
  }


  // Calendar Display
  const [calendarDisplay, setCalendarDisplay] = useState('none');

  function hideCalendar() {
    if (calendarDisplay === 'block') {
      setCalendarDisplay('none'); }
      else if(calendarDisplay === 'none') {
        setCalendarDisplay('block');
      }
    }


// Tally Sheet Display
      const [isOpen, setIsOpen] = useState(false);
      const toggleCollapse = () => setIsOpen(!isOpen);

      const [treeTotal, setTreeTotal] = useState(0)
      const [treePercent, setTreePercent] = useState(0)
      const [grassTotal, setGrassTotal] = useState(0)
      const [grassPercent, setGrassPercent] = useState(0)
      const [flowerTotal, setFlowerTotal] = useState(0)
      const [flowerPercent, setFlowerPercent] = useState(0)

      function toggleTallySheet(habitEventList) {
        let treeBools = habitEventList.map(function(habit) {
          return habit.tree; });
        let tempTreeSum = (treeBools.filter(a => a !== false)).length;
        setTreeTotal(tempTreeSum);
        if(tempTreeSum>0){
          let tempTreePercent = Math.round((treeTotal/habitEventList.length)*100)
          setTreePercent(tempTreePercent);
        }

        let grassBools = habitEventList.map(function(habit) {
          return habit.grass; });
          console.log('grassBools: ', grassBools);
        let tempGrassSum = (grassBools.filter(a => a !== false)).length;
        setGrassTotal(tempGrassSum);
        if(tempGrassSum>0){
          let tempGrassPercent = Math.round((grassTotal/habitEventList.length)*100)
          setGrassPercent(tempGrassPercent);
        }

        let flowerBools = habitEventList.map(function(habit) {
          return habit.flower; });
          console.log('flowerBools: ', flowerBools);
        let tempFlowerSum = (flowerBools.filter(a => a !== false)).length;
        console.log('TEMPFLOWERSUM: ', tempFlowerSum);
        setFlowerTotal(tempFlowerSum);
        if(tempFlowerSum>0){
          let tempFlowerPercent = Math.round((flowerTotal/habitEventList.length)*100)
          setFlowerPercent(tempFlowerPercent);
        }
        toggleCollapse();
      }


// Toggle Secret Key Display

        const [keyDisplay, setkeyDisplay] = useState('none');

        function ToggleKey() {
          if (keyDisplay === 'block') {
            setkeyDisplay('none'); }
            else if(keyDisplay === 'none') {
              setkeyDisplay('block');
            }
          }


// Unused code to find matching Date Event
        function preSelectedDate(newHabit){
          console.log('preSelectedDate dateTitle: ', dateTitle);
          console.log('preSelectedDate habitEventList: ', habitEventList);
          console.log('FIND FUNCTION: ', (habitEventList.find(x => x.date)));
          if ((habitEventList.find(x => x.date)) === dateTitle) {
            console.log('its a match!', newHabit);
            let matchElement = habitEventList.find(x => x.date === dateTitle);
            let newSelectedHabitEventList = habitEventList.splice(matchElement.index, 1);

            setCSelected(['a tree']);
            console.log('newSelectedHabitEventList after set preDate: ', newSelectedHabitEventList);
            console.log('habitEventList after set preDate: ', habitEventList);
            console.log('matchElement = ', matchElement);
          }
          return;
        }



      return (
        <div className='fullBody'>

          <Opener />

          <YearForest habitEventList={habitEventList} className='yearForest'/>

          <div className="hideCalendarDiv" onClick={hideCalendar}></div>
          <div onClick={hideCalendar} className='hidedivdiv'></div>

          <div className='calendarReact' style={{display: `${calendarDisplay}`}}>
            <CalendarReact className='calendar' toggle={toggle} preSelectedDate={preSelectedDate()}/>
          </div>

          <EventModal 
            modal={modal}
            toggle={toggle} 
            dateTitle={dateTitle}
            handleAddHabitEvent={handleAddHabitEvent}
            cSelected={cSelected}
            setSpecialTreeNote={setSpecialTreeNote}
            setSpecialFlowerNote={setSpecialFlowerNote}
            setSpecialGrassNote={setSpecialGrassNote}
            onCheckboxBtnClick={onCheckboxBtnClick}
          />


          <div onClick={()=>toggleTallySheet(habitEventList)} habitEventList={habitEventList}>
            <div className='cloudPart1'></div>
            <div className='cloudPart2'></div>
            <TallySheet 
              treeTotal={treeTotal} 
              flowerTotal={flowerTotal} 
              grassTotal={grassTotal} 
              isOpen={isOpen} 
              treePercent={treePercent} 
              flowerPercent={flowerPercent} 
              grassPercent={grassPercent} />
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
