import React from 'react';
import {Link} from 'react-router-dom';


function LeftNav(){

  const navLink= {
    float: 'left',
    margin: '5px',
    color: 'red'
  }
  const link= {
    color: 'black',
    textShadow: '1px 1px darkgrey',
    fontWeight: 'bold'
  }

  return(
    <div>
      <table className="nav-links">
        <tr>
          <div style={navLink}>
            <Link to='/' style={link}>Home</Link>
          </div>

          <div style={navLink}>
            <Link to='/aboutUs' style={link}>About us</Link>
          </div>

        </tr>
      </table>
    </div>
  );
}
export default LeftNav;
