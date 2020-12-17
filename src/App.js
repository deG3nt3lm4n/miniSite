import React from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.css';

import Header from './components/Header';
import HomePage from './components/HomePage';
import Tribute from './components/Tribute';


function App() {
  return (
    <div className="App">
     <Header />


      <Switch>

        <Route path="/tribute" component={Tribute} />

        <Route exact path="/" component={HomePage} />

      </Switch>
    </div>
  );
}

export default App;
