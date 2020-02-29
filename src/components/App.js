import React from 'react';
import './App.css';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import MyTree from './MyTree';
import MySyncfusionCalendar from './MySyncfusionCalendar';


class App extends React.Component {

  render(){
    return (
      <div>
        <MyTree />
        <div >

          <MySyncfusionCalendar />
        </div>
      </div>
    );
  }
}

export default App;
