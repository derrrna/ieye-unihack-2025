import React from 'react';
import { useState } from 'react';
import { BrowseerRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import CreationPage from './pages/CreationPage';

function App() {

  return (
    <Router>
        <Switch>
            <Route path="/login" component={Login}/>
        </Switch>
    </Router>
  )
}

export default App
