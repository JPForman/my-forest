import React, { useState } from 'react';
import './FlowerSet.css';
import flower from "./images/flower.png"

function GrassSet(habitEventList){

  const [flowerInfoDisplay, setFlowerInfoDisplay] = useState('none');

  function ToggleFlowerInfo() {
    if (flowerInfoDisplay === 'block') {
      setFlowerInfoDisplay('none'); }
      else if(flowerInfoDisplay === 'none') {
        setFlowerInfoDisplay('block');
      }
    }

    return(
      <div>

        {habitEventList.habitEventList.habitEventList.map((value, index) => {


          if(value.flower){
            return(
              <div className='flowerDiv'>
                <div className='flower' style={{
                    right:`${180*Math.random()-40}vh`,
                    top:`${40*Math.random()-15}vh`}}>
                  <div onClick={()=>ToggleFlowerInfo()}>
                    <img src={flower}></img>
                  </div>


                <div className='flowerInfo' style={{display:`${flowerInfoDisplay}`}}>
                  <div className='flowerInfoDiv'>
                    <h4>{value.date.slice(0, 10)}</h4>
                    <h4>{value.specialFlowerNote}</h4>
                  </div>
                </div>

                </div>
              </div>
            )
          }
        })}
      </div>
    )
}

export default GrassSet;



// bottom:`${1.2*index+Math.random()}%`}}>
// right:`140vh`,
// top:`-15vh`}}>

// right:`-40vh`,
// top:`25vh`}}>
