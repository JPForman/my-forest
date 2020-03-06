import React from 'react';
import MyTree from './MyTree';
import Grass from './Grass';
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
                  left:`${1.2*index + Math.random()}%`,
                  transform:'scale(0.1)',
                  bottom:`${1.2*index+Math.random()}%`}}>
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
        // <button className='treeButton' onClick={this.addNewGrassToList}>Add a tree?</button>
