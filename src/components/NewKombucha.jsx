import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

function NewKombucha(props){
  let _name = null;
  let _flavor = null;
  let _price = null;
  let _pintsLeft = 124;

  function handleNewKombuchaFormSubmission(event) {
    event.preventDefault();
    props.onNewKombuchaCreation({name: _name.value, pintsLeft: _pintsLeft, flavor: _flavor.value, price: _price.value});
    _name.value = '';
    _flavor.value = '';
    _price.value = '';
    props.history.push('/')
  }

  const updateTitle= {
  }

  const updateTitleRow={
    display: 'grid',
    gridTemplateColumns: 'auto auto auto'
  }

  const update={
  }

  const updateBody={
    marginTop: '100px',
  }

  const updateRow={
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
  }

  return(
    <div style={updateBody}>
      <h1 className="logo">New Kombucha Page</h1>

        <div style={updateTitleRow}>
          <p style={updateTitle}>Name</p>
          <p style={updateTitle}>Flavor</p>
          <p style={updateTitle}>Price</p>
        </div>
        <form onSubmit={handleNewKombuchaFormSubmission}>
        <div style={updateRow}>
          <input
            style={update}
            type='text'
            id='name'
            placeholder='Name of Kombucha'
            ref={(input) => {_name = input;}}/>
          <input
            style={update}
            type='text'
            id='flavor'
            placeholder='Flavor'
            ref={(input) => {_flavor = input;}}/>
          <input
            style={update}
            type='text'
            id='price'
            placeholder='Price'
          ref={(input) => {_price = input;}}/>
          </div>
          <button type='submit'>Add the Buch!</button>

        </form>
      </div>
    );
  }

  NewKombucha.propTypes = {
    onNewKombuchaCreation: PropTypes.func
  };

  export default withRouter(NewKombucha);
