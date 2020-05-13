import React, { useState } from 'react';
import ReactDOM from "react-dom";
import MyTree from './MyTree';
// import YearForest from './YearForest';
import HabitController from './HabitController';
import Login from './Login';


class App extends React.Component {


render(){



    return (
      <div className='app'>
        <Login />
        <HabitController />
      </div>
    );
  }
}

export default App;


