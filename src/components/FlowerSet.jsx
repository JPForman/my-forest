import React from 'react';
import './FlowerSet.css';
import flower from "./images/flower.png"

function GrassSet(habitEventList){

    return(
      <div>

        {habitEventList.habitEventList.habitEventList.map((value, index) => {

          console.log('Flower Set!');
          if(value.flower){
            return(
              <div className='flower' style={{
                  left:`${8.2*index + Math.random()}%`,
                  transform:'scale(0.1)',
                  bottom:`${1.2*index+Math.random()}%`}}>
                <img src={flower}></img>
              </div>
            )
          }
        })}
      </div>
    )
}

export default GrassSet;
