import React, { useState } from 'react';
import MyTree from './MyTree';
import './GrassSet.css';
import grass from "./images/grass.png"

function GrassSet(habitEventList){

  const [grassInfoDisplay, setGrassInfoDisplay] = useState('none');

  function ToggleGrassInfo() {
    if (grassInfoDisplay === 'block') {
      setGrassInfoDisplay('none'); }
      else if(grassInfoDisplay === 'none') {
        setGrassInfoDisplay('block');
      }
    }

    return(
      <div>

        {habitEventList.habitEventList.habitEventList.map((value, index) => {

          if(value.grass){
            return(
              <div className='grass' style={{
                  transform:'scale(0.1)',
                  right:`${value.grassRight}vh`,
                  top:`${value.grassTop}vh`}}>
                <div onClick={()=>ToggleGrassInfo()}>
                  <img src={grass}></img>
                </div>

                <div className='grassInfo' style={{display:`${grassInfoDisplay}`}}>
                  <div className='grassInfoDiv'>
                    <h4>{value.date.slice(0, 10)}</h4>
                    <h4>{value.specialGrassNote}</h4>
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


// transform:`scale(${0.5*(index+1)}
// right:`-30vh`,
// right:`145vh`,
// top:`30vh`}}>
// top:`-18vh`}}>
