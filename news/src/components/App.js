import React from 'react';
import './App.css';
import Menu from './Menu'
import Home from '../containers/Home'
import Section from '../containers/Section';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
        <Menu/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/sports' component={Home} />
          <Route exact path='/business' component={Home} />
          <Route exact path='/technology' component={Home} />
          <Route exact path='/design' component={Home} />
          <Route exact path='/international' component={Home} />
        </Switch>
    </BrowserRouter>

  );
}

export default App;
