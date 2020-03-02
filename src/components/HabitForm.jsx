import React from 'react';
import './HabitForm.css';
import { Button } from 'reactstrap';




function HabitForm(props){
  return(

    <div className="habitForm">
    <h3>March 4, 2020</h3>
    <div>
    <h4>Add a tree for today:</h4>
    <Button color="primary">primary</Button>{' '}
    <Button color="secondary">secondary</Button>{' '}
    </div>
    </div>
          

    )
  }

  export default HabitForm;
