import React, { useState } from 'react';
import './Opener.css';
import grass from "./images/grass.png"
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';

function Opener(habitEventList){



  const [displayTitle, setDisplayTitle] = useState('block');
  const [displayWelcome, setDisplayWelcome] = useState('none');

  function hideTitle(){
    if (displayTitle === 'block') {
      setDisplayTitle('none');
      setDisplayWelcome('block'); }
    }



  return(
    <div>
      <div className='titleDiv'>
        <h1 className='title' style={{display: `${displayTitle}`}} onClick={hideTitle}>myForest</h1>

          <Card onClick={()=> setDisplayWelcome('none')} className='welcome' style={{display: `${displayWelcome}`}}>
              <CardText>welcome to myForest.
              <br></br>
              <br></br>
              hi. why not keep track of some things, maybe cool things, in your life? click on the rock, select a day, and add your secret with a tree, some grass, or a flower.
              <br></br>
              <br></br>
              different pictures could represent different things to you, like finishing a book or a day you worked out :) you can save your secret codes in the keyHole and check out stats in the clouds.
              <br></br>
              <br></br>
              there are probably some things hidden around. i like to use this in full screen, but you should do whatever makes you happy.
              <br></br>
              <br></br>
              this is so you can look at your life like a forest
            </CardText>
          </Card>

      </div>
    </div>
  )
}

export default Opener;
