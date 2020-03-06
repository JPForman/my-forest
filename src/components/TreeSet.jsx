import React from 'react';
import MyTree from './MyTree';
import './TreeSet.css';

function TreeSet(habitEventList){

  console.log('TreeSetClass habitEventList:', habitEventList.habitEventList.habitEventList);

  function addNewTreeToList(){
    // let newTreeSet = this.state.treeSet.slice()
    // newTreeSet.push(1)
    // this.setState({treeSet: newTreeSet})
    console.log('add new tree');
  }

    return(
      <div>

        {habitEventList.habitEventList.habitEventList.map((value, index) => {
          console.log("TreeList Map value: ", value);
          if(value.tree){
          return (
                <div className='tree' style={{left:`${1.2*index + Math.random()}%`, transform:`scale(${0.5})`, bottom:`${30 + 100*Math.random()}%`}}>
                    <MyTree />
                </div>
            )}
          })}
      </div>
        //     )
        //   }
        // )}
    )
  // }
}

export default TreeSet;


// transform:`scale(${0.5*(index+1)}
        // <button className='treeButton' onClick={this.addNewTreeToList}>Add a tree?</button>
