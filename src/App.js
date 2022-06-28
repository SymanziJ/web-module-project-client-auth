import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const Login = () => {
  return (<h1>Login</h1>)
}

const FriendsList = () => {
  return (<h1>Friends List</h1>)
}

const AddFriends = () => {
  return (<h1>Add Friend</h1>)
}

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route path="/login">
            <Redirect to="/" />
          </Route>
          <Route path="/friends">
            <FriendsList/>
          </Route>
          <Route path="/addfriends">
            <AddFriends/>
          </Route>  
        </Switch>
      </div>
    </Router>
  );
}

export default App;
