import React from 'react';
// import logo from './logo.svg';
import './App.css';
import CounterApp from './container/Counter'
import Home from './container/Home'
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/count' component={CounterApp}></Route>
        <Route path='/' component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
