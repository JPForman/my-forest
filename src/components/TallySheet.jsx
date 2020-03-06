import React, { useState } from 'react';
import './TallySheet.css';


function TallySheet(habitEventList){

const [treeTotal, setTreeTotal] = useState(0)

  function SumTree(habitEventList) {
    console.log('totalTree before', treeTotal);
    console.log('habitEventList.habitEventList in SumTree', habitEventList.habitEventList);
  }
    // let treeSet = habitEventList.habitEventList.map(function (habit) { return habit.tree; });
    // console.log(treeSet);
    // let sum  = 0
    // let treeArray = habitEventList.havitEventList
    // }

    SumTree(habitEventList);

    return(
      <div>
        <h1>TallySheet</h1>
        <h3>Total Trees:`${treeTotal}`</h3>
      
      </div>
    );
  }

  export default TallySheet;
