import React from 'react';
import MyTree from './MyTree';
import './TreeSet.css';

class TreeSet extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      treeSet: [1,2,3]
    }
    this.addNewTreeToList = this.addNewTreeToList.bind(this)
  }

  addNewTreeToList(tree){
    let newTreeSet = this.state.treeSet.slice()
    newTreeSet.push(tree)
    this.setState({treeSet: newTreeSet})
  }



  render() {
    return(
      <div>
      <p>hi class treeSet</p>
         {this.state.treeSet.map((value, index) => {
             return <MyTree />}
      )}
      </div>
    )
  }
}

export default TreeSet;
