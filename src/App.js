import React from 'react';
// import logo from './trivia.png';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';

export default function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={ Login } />
      </Switch>
    </main>
  );
}
