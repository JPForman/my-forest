import React from 'react';
import './HabitForm.css';
import { Button, ButtonGroup } from 'reactstrap';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function HabitForm(props){
  let _tree = false;

  function handleHabitFormSubmission(event) {
    event.preventDefault();
    let tree = document.getElementById("tree");
    if(tree.checked) { console.log('tree is Checked')};
    if(!tree.checked) { console.log('tree is notChecked')};

    console.log("tree before = " + _tree)
    if(tree.checked) { _tree = !_tree };
    console.log("tree after = " + _tree)

    const { dispatch } = props;
    const action = {
      type: "ADD_HABITS",
      id: v4(),
      tree: _tree
    }
    dispatch(action)
  }


  return(
    <div>
    <h2>Selected Date: (here)</h2>
      <form onSubmit={handleHabitFormSubmission}>
      <h3>Tree day? Check the box :)</h3>
        <input
        type='checkbox'
        id='tree'
        name='tree'/>
        <button type='submit'>i did it :)</button>
      </form>
    </div>

  );
  }

  HabitForm = connect()(HabitForm)

  export default HabitForm;
