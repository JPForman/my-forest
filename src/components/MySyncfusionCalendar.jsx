import React from 'react';
import './App.css';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel } from '@syncfusion/ej2-react-schedule';




function MySyncfusionCalendar(){
  return (
    <div>
      <ScheduleComponent className='schedule'>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
  </div>
)
}

export default MySyncfusionCalendar;
