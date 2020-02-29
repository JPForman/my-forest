import React from 'react';
import './App.css';
// import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import MyTree from './MyTree';
// import Header from './Header';
// import KombuchaList from './KombuchaList';
// import UpdateKombucha from './UpdateKombucha';
// import NewKombucha from './NewKombucha';
// import Error404 from './Error404';
// import {Switch, Route, Link } from 'react-router-dom';


class App extends React.Component {

  render(){
    return (
      <div className="App">
        <MyTree />

      </div>
    );
  }
}

export default App;




// <ScheduleComponent>
  // <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
// </ScheduleComponent>
