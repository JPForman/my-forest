import React from 'react';
import './MyTree.css';


function MyTree(habitEventList){
  console.log('myTree habitEventList: ', habitEventList);
  return(
    <div>
      <div className='tree'>
        <div className='treeLeaves'>
          <div className='trunk'>
            <div className='leftBranch'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTree;
