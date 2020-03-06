import React from 'react';
import MyTree from './MyTree';
import TreeSet from './TreeSet';
import GrassSet from './GrassSet';
import './YearForest.css';


function YearForest(habitEventList){
  return(
    <div className='sky'>
    <div className='sun'>    </div>
    <div className='ground'>
      <TreeSet habitEventList={habitEventList}/>
      <GrassSet habitEventList={habitEventList}/>
    </div>
    </div>

  );
}

export default YearForest;
