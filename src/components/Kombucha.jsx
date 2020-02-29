import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import KombuchaList from './KombuchaList';

const propRow={
  display: 'grid',
  gridTemplateColumns: '20% 20% 20% 20% 20%',
  textAlign: 'center',
  border: '2px solid black',
  margin: '5px',
  borderRadius: '5px',
}

const editLink={
  fontSize: '15px'
}

const prop={
  top: '30%',
  position: 'relative',
}

const sellButton={
  marginTop: '15px',
}

class Kombucha extends React.Component{
    constructor(props) {
      super(props)
      this.state = {
        pintsLeft: props.pintsLeft
      }
      this.handleSellPint = this.handleSellPint.bind(this)
    };

    handleSellPint(kombucha) {
      let newPintsLeft = this.state.pintsLeft
      newPintsLeft -= 1;
      this.setState({pintsLeft: newPintsLeft})
    }


  render(props){
  return (
      <div style={propRow}>
        <div>
          <h2><em>{this.props.name}</em></h2>
          <Link to='/UpdateKombucha' style={editLink}>edit the brew</Link>
        </div>
        <p style={prop}>{this.props.flavor}</p>
        <p style={prop}><em>{this.props.price}</em></p>
        <button style={sellButton} onClick={this.handleSellPint}>Sell Pint</button>
        <p style={prop}>{this.state.pintsLeft}</p>
        <hr/>
      </div>
  );
}
}
Kombucha.propTypes = {
  name: PropTypes.string,
  flavor: PropTypes.string,
  price: PropTypes.string,
  pintsLeft: PropTypes.string
};

export default Kombucha;
