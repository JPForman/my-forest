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
                left:`${1.2*index + Math.random()}%`,
                transform:`scale(${0.5})`,
                bottom:`${30 + 100*Math.random()}%`}}>
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
