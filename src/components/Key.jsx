import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import './Key.css';


function Key(habitEventList){

  const [keyDisplay, setKeyDisplay] = useState('block');

  function ToggleKey() {
    if (keyDisplay === 'block') {
      setKeyDisplay('none'); }
      else if(keyDisplay === 'none') {
        setKeyDisplay('block');
      }
    }


    return(
      <div>
        <div style={{display: `${keyDisplay}`}}>
          <Card body outline color="warning">
            <CardTitle>Key</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button onClick={ToggleKey} color="secondary">Button</Button>
          </Card>

        </div>
      </div>

    );
  }

  export default Key;
