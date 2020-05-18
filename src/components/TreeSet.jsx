import React, { useState } from 'react';
import MyTree from './MyTree';
import './TreeSet.css';

function TreeSet(habitEventList){

  const [treeInfoDisplay, setTreeInfoDisplay] = useState('none');

  function ToggleTreeInfo() {
    console.log('le toggle tree eh');
    if (treeInfoDisplay === 'block') {
      setTreeInfoDisplay('none'); }
      else if(treeInfoDisplay === 'none') {
        setTreeInfoDisplay('block');
      }
    }

    return(
      <div>

        {habitEventList.habitEventList.habitEventList.map((value, index) => {
          if(value.tree){
            return (
              <div className='tree' style={{
                  transform:`scale(${0.5})`,
                  left:`${value.treeLeft}vh`,
                  bottom:`${value.treeBottom}vh`,
                }}>

                <div onClick={()=>ToggleTreeInfo()}>
                  <MyTree />
                </div>

                <div className='treeInfo' style={{display:`${treeInfoDisplay}`}}>
                  <div className='infoDiv'>
                    <h4>{value.date.slice(0, 10)}</h4>
                    <h4>{value.specialTreeNote}</h4>
                    
                  </div>
                </div>
              </div>
            )
          }
        })}
      </div>
    )
}

export default TreeSet;
