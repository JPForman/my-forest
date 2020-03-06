import React from 'react';
import MyTree from './MyTree';
import Grass from './Grass';
import './TreeSet.css';
import grass from "./images/grass.png"

function TreeSet(habitEventList){

    return(
      <div>

        {habitEventList.habitEventList.habitEventList.map((value, index) => {
          if(value.tree){
            let b=30 + 100*Math.random()
            return (
              <div className='tree' style={{
                left:`${1.2*index + Math.random()}%`,
                transform:`scale(${0.5})`,
                bottom:`${b}%`,
                zIndex: `${-b}`}}>
                  <MyTree />
              </div>
            )
          }

          if(value.grass){
            console.log('need some grass');
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

export default TreeSet;


// transform:`scale(${0.5*(index+1)}
        // <button className='treeButton' onClick={this.addNewTreeToList}>Add a tree?</button>
