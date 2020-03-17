import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Card, Button, CardTitle, CardText } from 'reactstrap';
import './KeySignIn.css';



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

  const [treeKey, setTreeKey] = useState('finished a book');

  function ResetTreeKey(treeKeyInput){
    setTreeKey(treeKeyInput);
  }

  const [grassKey, setGrassKey] = useState('practiced yoga');

  function ResetGrassKey(grassKeyInput){
    setGrassKey(grassKeyInput);
  }

  const [flowerKey, setFlowerKey] = useState('worked on my art');

  function ResetFlowerKey(flowerKeyInput){
    setFlowerKey(flowerKeyInput);
  }

  return(
    <div>

      <div className='keyCards' style={{display: `${keySignInDisplay}`}}>
        <Card body outline color="warning">
          <CardTitle>view your secret key???</CardTitle>
          <CardText>enter your password to view your secret key</CardText>
          <FormGroup>
            <Label >password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="enter password here" />
          </FormGroup>
          <Button onClick={ToggleKey} color="secondary">Button</Button>
        </Card>
      </div>

      <div className='keyCards' style={{display: `${keyDisplay}`}}>
        <Card body outline color="warning">
          <CardTitle>my secret forest key</CardTitle>
          <div className='keys'>
            <Input
              type="text"
              className="input"
              name="treeKeyInput"
              onChange={e=>ResetTreeKey(e.target.value)}
              placeholder="tree meaning :)" />

            <Input
              type="text"
              className="input"
              name="grassKeyInput"
              onChange={e=>ResetGrassKey(e.target.value)}
              placeholder="your wisp of grass" />

              <Input
                type="text"
                className="input"
                name="flowerKeyInput"
                onChange={e=>ResetFlowerKey(e.target.value)}
                placeholder="flowers" />
            </div>

          <CardText>a sweet walk around the orchard will reveal the trees to whisper about a day i {treeKey}. oh, and the flowing grass talks about days i {grassKey}. flowers appear, and i can remember a time when i {flowerKey}</CardText>
        </Card>
      </div>
    </div>


  );
}

export default KeySignIn;
// onChange={e=>ResetTreeKey(e.target.value)}
