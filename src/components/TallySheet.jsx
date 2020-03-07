import React, { useState } from 'react';
import './TallySheet.css';


function TallySheet(habitEventList){

  const [treeTotal, setTreeTotal] = useState(0)

  SumTree(habitEventList);

  function SumTree(habitEventList) {
    console.log('habitEventList in SumTree', habitEventList);
    // console.log('habitEventList.habitEventList in SumTree', habitEventList.habitEventList);
    // let treeBools = habitEventList.habitEventList.map(function (habit) {
    //   return habit.tree; });
    // console.log('treeBools: ', treeBools);
    // let tempSum = (treeBools.filter(a => a !== false)).length;
    // console.log('tempSum: ', tempSum);
    // setTreeTotal(1);
    // return tempSum;
    }
    //
    // console.log('totalTree before sum', treeTotal);
    // SumTree(habitEventList);
    // console.log('totalTree after sum', treeTotal);
console.log('Tally!');
    return (
      <div>
        <h1>TallySheet</h1>
        <h3>Total Trees:`${ treeTotal }`</h3>
      </div>
    );


  }

  export default TallySheet;
