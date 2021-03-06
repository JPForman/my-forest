import React, { Component, useState } from 'react';
import Calendar from 'react-calendar';
import HabitController from './HabitController';
import './CalendarReact.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default class CalendarReact extends Component {

  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
    }
    this.dayClick = this.dayClick.bind(this)
  }

  onChange = date => this.setState({ date })

  dayClick(value, event, props) {
    this.props.toggle(value);
  }


  render() {

    return (
      <div>
        <div className="calendarReactDiv">
          <Calendar
            className="calendar"
            onChange={this.onChange}
            value={this.state.date}
            onClickDay={this.dayClick}
          />
        </div>
      </div>
    );
  }
}
