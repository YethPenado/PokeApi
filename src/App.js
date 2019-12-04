import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Card from './pages/Card';
import './App.css';

function App() {
  fetch('https://api.pokemontcg.io/v1/cards')
    .then(data => data.json())
    .then(data => {localStorage.setItem('data', JSON.stringify(data))});

  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} component={Home} exact/>
        <Route path={"/Card"} component={Card}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
