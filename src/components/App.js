import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import MyTree from './MyTree';
import MySyncfusionCalendar from './MySyncfusionCalendar';
import CalendarScratch from './CalendarScratch';
import YearForest from './YearForest';
import HabitController from './HabitController';
import CalendarReact from './CalendarReact';


class App extends React.Component {

  render(){
    return (
      <div>
        <YearForest />

        <HabitController />
      </div>
    );
  }
}

export default App;



// My Possible Components

// <MySyncfusionCalendar />
// <CalendarScratch />
  // <CalendarReact />
        // <CalendarReact />
