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
                left:`155vh`,
                bottom:`85vh`}}>
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
        // bottom:`40vh`}}>
