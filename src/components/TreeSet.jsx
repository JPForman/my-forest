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
      <button onClick={this.addNewTreeToList}>Add a tree?</button>
         {this.state.treeSet.map((value, index) => {
             return <MyTree className='tree' />
           }
      )}
      </div>
    )
  }
}

export default TreeSet;
