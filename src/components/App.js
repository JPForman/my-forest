import React from 'react';
import ReactDOM from "react-dom";
import MyTree from './MyTree';
// import YearForest from './YearForest';
import HabitController from './HabitController';
import CalendarReact from './CalendarReact';


class App extends React.Component {

  render(){
    return (
      <div>

        <HabitController />
      </div>
    );
  }
}

export default App;


        // <YearForest />
