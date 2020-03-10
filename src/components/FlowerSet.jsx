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
              <div className='flowerDiv'>
                <div className='flower' style={{
                    right:`${180*Math.random()-40}vh`,
                    top:`${40*Math.random()-15}vh`}}>
                  <img src={flower}></img>
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
