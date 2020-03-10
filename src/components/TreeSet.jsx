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

    console.log('TreeSet habitEventList: ', habitEventList);


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
                  <h1>{value.date}</h1>
                </div>
              </div>
            )
          }
        })}
      </div>
    )
}

export default TreeSet;
// left:`${135*Math.random()+5}vh`,
// bottom:`${45*Math.random()+40}vh`
// <TreeInfo />
