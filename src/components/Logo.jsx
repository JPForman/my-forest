import React from 'react';
import {Link} from 'react-router-dom';
import GaneshaIcon from './images/GaneshaIcon.png';


function Logo(){
  const icon={
    height: '80px',
    marginTop: '2.5%',
    position: 'relative',
    zIndex: '-1',
  }

  const title={
    marginTop: "-100px"
  }

  return(
    <div>
    <img style={icon} src={GaneshaIcon}></img>
    <h1 style={title}className="logo">Ganesha's Kombucha House</h1>
    </div>
  );

}

export default Logo;
