import React from 'react';
import {Link} from 'react-router-dom';


function UpdateKombucha(){

  const updateTitle= {
  }

  const update={

  }

  const updateTitleRow={
    display: 'grid',
    gridTemplateColumns: 'auto auto auto'
  }

  const subTitle={
    fontFamily: 'fantasy',
  }

  const updateRow={
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
  }

  const updateBody={
    marginTop: '100px',
  }

  return(
    <div style={updateBody}>
      <h1 style={subTitle}>Update Kombucha Page</h1>

        <div style={updateTitleRow}>
          <p style={updateTitle}>Name</p>
          <p style={updateTitle}>Flavor</p>
          <p style={updateTitle}>Price</p>
        </div>
        <form>
        <div style={updateRow}>
          <input
            style={update}
            type='text'
            id='Name'
            placeholder='Name of Kombucha'/>
          <input
            style={update}
            type='text'
            id='Flavor'
            placeholder='Flavor'/>
          <input
            style={update}
            type='text'
            id='Price'
            placeholder='Price'/>
          </div>
          <button>Update</button>
        </form>
      </div>

    );

  }

  export default UpdateKombucha;
