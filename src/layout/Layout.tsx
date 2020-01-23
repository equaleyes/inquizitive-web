import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login  from '../pages/login/Login';
import Test from '../pages/Test';
import './Layout.scss';
import Sysbar from './Sysbar/Sysbar';
import SideMenu from './SideMenu/SideMenu';

const Layout = () => {
  return (
    <Router>
      <div className="app-content">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <div className="layout-wrapper">
            <Sysbar />
            <div className="content-wrapper">
              <SideMenu />
              {/* some content wrapper */}
              <div className="content">
                <Route path="/" exact>
                  <Test />
                </Route>
              </div>
            </div>
          </div>
        </Switch>
      </div>
    </Router>
  );
};

export default Layout;