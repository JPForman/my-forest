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
                  right:`${175*Math.random()-30}vh`,
                  top:`${48*Math.random()-18}vh`}}>
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
