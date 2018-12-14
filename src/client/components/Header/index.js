import React from 'react';
import './style.css';

const Header = (props) => {
  return(
    <div className="header">
      <center>
        {props.appName}
      </center>
    </div>
  );
};

export default Header;