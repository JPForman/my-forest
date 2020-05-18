import React, { useState } from 'react';
import { Form, Input, } from 'reactstrap';
import { Link } from 'react-router-dom';
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
        <Form onSubmit={checkLogin} className='loginForm'>
          <Input
            type="text"
            className='givenLoginID'
            onChange={e=> setGivenLoginID(e.target.value)}
            placeholder="Login ID" />
          <Input
            type="password"
            className='givenLoginPassword'
            onChange={e=> setGivenLoginPassword(e.target.value)}
            placeholder="Password" />
            <Link to='/myForest'>
          <button className='submitLogin' type='submit' value='submit'>submit</button>
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Login;
