import React from 'react';
import './App.css';
import Header from './Header';
import KombuchaList from './KombuchaList';
import UpdateKombucha from './UpdateKombucha';
import NewKombucha from './NewKombucha';
import Error404 from './Error404';
import {Switch, Route, Link } from 'react-router-dom';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKombuchaList: []
    };
    this.handleAddingNewKombuchaToList = this.handleAddingNewKombuchaToList.bind(this);
    this.handleSellPint = this.handleSellPint.bind(this);
  }

  handleAddingNewKombuchaToList(newBrew) {
    var newMasterKombuchaList = this.state.masterKombuchaList.slice();
    newMasterKombuchaList.push(newBrew);
    this.setState({masterKombuchaList: newMasterKombuchaList});
  }

  handleSellPint() {
    let updatedKombucha = this.state.Kombucha
    updatedKombucha.pintsLeft -= 1;
    this.setState({pintsLeft: updatedKombucha.pintsLeft})
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" render={()=><KombuchaList
            kombuchaList={this.state.masterKombuchaList}
            onSellPint={this.handleSellPint}
            />} />
          <Route exact path="/NewKombucha" render={()=><NewKombucha onNewKombuchaCreation={this.handleAddingNewKombuchaToList} />} />
          <Route exact path="/UpdateKombucha" component={UpdateKombucha} />
          <Route path="/Kombucha" render={()=><KombuchaList onSellPint={this.handleSellPint} />} />
          <Route component={Error404} />

        </Switch>
    </div>
  );
  }
}

export default App;
