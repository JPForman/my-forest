import React, { useState } from 'react';
import { FormGroup, Label, Input, Card, Button, CardTitle, CardText } from 'reactstrap';
import './KeySignIn.css';
import Key from './Key';



function KeySignIn(habitEventList){

  const [keySignInDisplay, setKeySignInDisplay] = useState('block');

  function ToggleSignInKey() {
    if (keySignInDisplay === 'block') {
      setKeySignInDisplay('none'); }
      else if(keySignInDisplay === 'none') {
        setKeySignInDisplay('block');
      }
    }

  const [keyDisplay, setKeyDisplay] = useState('none');

  function ToggleKey() {
    if (keyDisplay === 'block') {
      setKeyDisplay('none'); }
      else if(keyDisplay === 'none') {
        setKeyDisplay('block');
      }
    ToggleSignInKey();
    }

  return(
    <div>

      <div className='keyCards' style={{display: `${keySignInDisplay}`}}>
        <Card body outline color="warning">
          <CardTitle>view your secret key???</CardTitle>
          <CardText>enter your password to see your secret key</CardText>
          <FormGroup>
            <Label >password</Label>
            <Input type="text" name="password" id="examplePassword" placeholder="enter password here" />
          </FormGroup>
          <Button onClick={ToggleKey} color="secondary">Button</Button>
        </Card>
      </div>

      <div className='keyCards' style={{display: `${keyDisplay}`}}>
        <Card body outline color="warning">
          <CardTitle>Key</CardTitle>
          <CardText>Trees mean:</CardText>
          <CardText>Grass means:</CardText>
          <CardText>Flowers mean:</CardText>
        </Card>
      </div>
    </div>


  );
}

export default KeySignIn;
