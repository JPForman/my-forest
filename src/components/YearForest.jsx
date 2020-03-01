import React from 'react';
import MyTree from './MyTree';
import './YearForest.css';


function YearForest(){
  return(
    <div className='sky'>
      <div className='sun'>    </div>
    <div className='ground'>  </div>
    <MyTree className='tree'/>

    </div>

  );
}

export default YearForest;
