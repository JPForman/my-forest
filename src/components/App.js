import React, { useState } from 'react';
import ReactDOM from "react-dom";
import MyTree from './MyTree';
// import YearForest from './YearForest';
import HabitController from './HabitController';
import Login from './Login';


function App() {

  const [habitControllerDisplay, setHabitControllerDisplay] = useState('none');
  const [loginDisplay, setLoginDisplay] = useState('block');

  return (
    <div className='app'>
      <div className='loginDisplay' style={{display: `${loginDisplay}`}}>
        <Login setHabitControllerDisplay={setHabitControllerDisplay} setLoginDisplay={setLoginDisplay}/>
      </div>

      <div className='habitControllerDisplay' style={{display: `${habitControllerDisplay}`}}>
        <HabitController />
      </div>

    </div>
  );
}


export default App;


