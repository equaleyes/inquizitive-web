import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login  from '../pages/login/Login';
import Query from '../queries/Query';
import './Layout.scss';
import Sysbar from './Sysbar/Sysbar';
import SideMenu from './SideMenu/SideMenu';
import Quizes from '../pages/quizes/Quixes';
import CreateQuiz from '../pages/createQuiz/CreateQuiz';
import Employees from '../pages/employees/Employees';
import Notification from '../components/notification/Notification';

const Layout = () => {
  return (
    <Router>
      <div className="app-content">
        <Notification />
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
                  <Quizes />
                </Route>
                <Route path="/create-quiz" exact>
                  <CreateQuiz />
                </Route>
                <Route path="/query">
                  <Query />
                </Route>
                <Route path="/employees">
                  <Employees />
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
