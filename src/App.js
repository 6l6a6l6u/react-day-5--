import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ListUsers from './components/ListUsers';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/users" component={ListUsers} />
          <Route exact path="/create-user" component={CreateUser} />
          <Route exact path="/edit-user/:id" component={EditUser} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/edit-profile/:id" component={EditProfile} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
