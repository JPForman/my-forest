import React from 'react';
import MyTree from './MyTree';
import './TreeSet.css';

class TreeSet extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      treeSet: []
    }
    this.addNewTreeToList = this.addNewTreeToList.bind(this)
  }

  addNewTreeToList(){
    let newTreeSet = this.state.treeSet.slice()
    newTreeSet.push(1)
    this.setState({treeSet: newTreeSet})
  }



  render() {
    return(
      <div>
      <button className='treeButton' onClick={this.addNewTreeToList}>Add a tree?</button>
         {this.state.treeSet.map((value, index) => {
             return (
               <div className='tree' style={{left:`${8.5*index}%`, transform:`scale(${0.5*(index+1)})` }} >
                  <MyTree />
               </div>

           )
           }
      )}
      </div>
    )
  }
}

export default TreeSet;