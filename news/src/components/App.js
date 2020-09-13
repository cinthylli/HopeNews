import React from 'react';
import './App.css';
import Menu from './Menu.jsx'
import News from '../containers/News';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
        <Menu/>
        <Switch>
          <Route exact path='/' component={News} />
          <Route exact path='/sports' component={News} />
          <Route exact path='/politics' component={News} />
          <Route exact path='/technology' component={News} />
          <Route exact path='/design' component={News} />
          <Route exact path='/international' component={News} />
        </Switch>
    </BrowserRouter>

  );
}

export default App;
