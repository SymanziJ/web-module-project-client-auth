import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';
import Logout from './components/Logout';

import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <Router>
      <header>
        <h2>Friends Database</h2>
        <nav>
          <NavLink className="link" to="/login">Login</NavLink>
          <NavLink className="link" to="/friends">Friends List</NavLink>
          <NavLink className="link" to="/friends/add">Add Friend</NavLink>
          <NavLink className="link" to="/logout">Logout</NavLink>
        </nav>
      </header>
      
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>

          <Route path="/login">
            <Redirect to="/" />
          </Route>

          <PrivateRoute exact path="/friends" component={FriendsList}/>

          <PrivateRoute path="/friends/add" component={AddFriends}/>

          <PrivateRoute path="/logout" component={Logout}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
