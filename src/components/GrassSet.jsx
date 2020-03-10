import React from 'react';
import MyTree from './MyTree';
import './GrassSet.css';
import grass from "./images/grass.png"

function GrassSet(habitEventList){

    return(
      <div>

        {habitEventList.habitEventList.habitEventList.map((value, index) => {

          console.log('Grass Set!');
          if(value.grass){
            return(
              <div className='grass' style={{
                  transform:'scale(0.1)',
                  right:`${value.grassRight}vh`,
                  top:`${value.grassTop}vh`}}>
                <img src={grass}></img>
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
