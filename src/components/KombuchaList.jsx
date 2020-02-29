import React from "react";
import Kombucha from "./Kombucha";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const brewHeaders={
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '20% 20% 20% 20% 20%',
  textAlign: 'center',
  backgroundColor: '#ace3af',
  fontFamily: 'fantasy',
  fontWeight: 'bold',
}

const brews={
  marginTop: '80px'
}

class KombuchaList extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      kombuchaList: props.kombuchaList
    }
  }


  handleSellPint(kombucha) {
    let newPintsLeft = this.state.pintsLeft
    newPintsLeft -= 1;
    this.setState({pintsLeft: newPintsLeft})
  }

  render(props){

  return (
    <div style={brews}>
      <div style={brewHeaders}>
        <h1>Brew Name</h1>
        <h1>Flavor</h1>
        <h1>Price</h1>
        <h1>Sell a Pint</h1>
        <h1># Pints Left</h1>
      </div>
      <Link to='./NewKombucha'>Add a Brew</Link>

        {this.state.kombuchaList.map((kombucha) =>
                <Kombucha
                name={kombucha.name}
                flavor={kombucha.flavor}
                price={kombucha.price}
                pintsLeft={kombucha.pintsLeft}/>
              )}
    </div>
  );
}
}

KombuchaList.propTypes = {
  kombuchaList: PropTypes.array,
  onSellPint: PropTypes.array
};

export default KombuchaList;
