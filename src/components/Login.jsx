import React, { useState } from 'react';
import { Form, Input, } from 'reactstrap';
import './Login.css';


function Login(){

  const [givenLoginID, setGivenLoginID] = useState('');
  const [givenLoginPassword, setGivenLoginPassword] = useState('');

  function checkLogin(givenLoginID, givenLoginPassword){
    //does a check

  }

  
  return(
    <div>
      welcome to myForest
      <Form onSubmit={checkLogin}>
        <Input
          type="text"
          className='givenLoginID'
          name="givenLoginID"
          onChange={e=> setGivenLoginID(e.target.value)}
          placeholder="Login ID" />
        <Input
          type="text"
          className='givenLoginPassword'
          name="givenLoginPassword"
          onChange={e=> setGivenLoginPassword(e.target.value)}
          placeholder="Login ID" />
        <button className='submitLogin' type='submit' value='submit'>submit</button>
      </Form>
    </div>
  );
}

export default Login;
