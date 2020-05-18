import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
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


      <Switch>
        <Route exact path='/' render={()=> <Login />}/>
        <Route exact path='/myForest' render={()=> <HabitController />}/>
      </Switch>

    </div>
  );
}


export default App;


