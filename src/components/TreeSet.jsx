import React from 'react';
import MyTree from './MyTree';
import './TreeSet.css';

function TreeSet(habitEventList){

    return(
      <div>

        {habitEventList.habitEventList.habitEventList.map((value, index) => {
          if(value.tree){
            return (
              <div className='tree' style={{
                transform:`scale(${0.5})`,
                left:`${135*Math.random()+5}vh`,
                bottom:`${45*Math.random()+40}vh`}}>
                  <MyTree />
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
        // left:`5vh`,
        // left:`180vh`,
        // bottom:`40vh`}}>
        // bottom:`85vh`}}>
// left:`${175*Math.random()+5}vh`,
