import React from 'react';
import MyTree from './MyTree';
import TreeSet from './TreeSet';
import GrassSet from './GrassSet';
import FlowerSet from './FlowerSet';
import Flower from './FlowerSet';
import './YearForest.css';


function YearForest(habitEventList){
  return(
    <div className='sky'>
      <div className='sun'>    </div>
      <div className='ground'>
        <TreeSet habitEventList={habitEventList}/>
      </div>
      <div className='grassSet'>
        <GrassSet habitEventList={habitEventList}/>
      </div>
      <div className='flowerSet'>
        <FlowerSet habitEventList={habitEventList}/>
      </div>
    </div>

  );
}

export default YearForest;
