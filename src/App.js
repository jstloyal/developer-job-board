import React from 'react';
import {Switch, Route, NavLink, Redirect } from 'react-router-dom';
import Nav from './components/Nav';
import JobList from './container/JobList';
import Job from './container/Job';

function App() {
  return (
    <div className="App">
      <NavLink to="/">
        {' '}
        <Nav />
        {' '}
      </NavLink>
      <Switch>
        <Route path="/" exact component={JobList} />
        {/* <Route path="/job/:job" exact component={Job} /> */}
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
