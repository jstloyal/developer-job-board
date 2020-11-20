import React from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import Nav from './components/Nav';
import JobList from './container/JobList';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={JobList} />
        <Route path="/job/:job" exact component={Job} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
