import React, { useState } from 'react';
import { Form, Input, } from 'reactstrap';
import './Login.css';
import titleImg from './images/titleImg.png';


function Login({setHabitControllerDisplay, setLoginDisplay}){

  const [givenLoginID, setGivenLoginID] = useState('');
  const [givenLoginPassword, setGivenLoginPassword] = useState('');

  function checkLogin(givenLoginID, givenLoginPassword){
    //does a check
    setHabitControllerDisplay('block');
    setLoginDisplay('none');
  }

  
  return(
    <div className='loginWrapper'>
      <div className='login'>
        <img src={titleImg} className='titleImg'></img>
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
    </div>
  );
}

export default Login;
