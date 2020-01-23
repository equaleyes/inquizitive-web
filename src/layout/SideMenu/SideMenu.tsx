import React from 'react';
import './SideMenu.scss';
import { NavLink } from 'react-router-dom';

const SideMenu = () => {
  return (
    <div className="side-menu">
      <NavLink to="/" activeClassName="active" exact>
        <img src="assets/help.svg" alt="" />
        Kvizi
      </NavLink>
      <NavLink to="/a" activeClassName="active">
        <img src="assets/gift.svg" alt="" />
        Nagrade
      </NavLink>
      <NavLink to="/b" activeClassName="active">
        <img src="assets/employee.svg" alt="" />
        Zaposleni
      </NavLink>
      <NavLink to="/c" activeClassName="active">
        <img src="assets/settings.svg" alt="" />
        Nastavitve
      </NavLink>
    </div>
  );
};

export default SideMenu;