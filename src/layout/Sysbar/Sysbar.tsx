import React from 'react';
import './Sysbar.scss';

const Sysbar = () => {
  return (
    <div className="sysbar">
      <div className="logo">
        <img src="assets/logo-white.png" alt="" />
      </div>
      <ul>
        <li>
          <img src="assets/logo-posta.svg" className="external-logo" alt="" />
        </li>
      </ul>
      <div className="logout">
        <img src="assets/logout.svg" alt="" />
        Odjava
      </div>
    </div>
  );
};

export default Sysbar;
