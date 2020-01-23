import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../pages/login/Login';
import Test from '../pages/Test';
import Query from '../queries/Query';
import './Layout.scss';

const Layout = () => {
  return (
    <Router>
      <div className="app-content">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <div className="layout-wrapper">
            {/* sysbar */}
            <div className="content-wrapper">
              {/* here should come side menu */}
              {/* some content wrapper */}
              <div className="content">
                <Route path="/">
                  <Test />
                </Route>
                <Route path="/queries">
                  <Query />
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
