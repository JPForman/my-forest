import React from 'react';
import MyTree from './MyTree';
import TreeSet from './TreeSet';
import './YearForest.css';


function YearForest(){
  return(
    <div className='sky'>
    <div className='sun'>    </div>
    <div className='ground'>
      <TreeSet />
    </div>
    </div>

  );
}

export default YearForest;
