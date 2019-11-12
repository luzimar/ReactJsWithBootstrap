import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import { Details } from './pages/Details';
const Routes = () => (
  <BrowserRouter>
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details" component={Details} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </>
  </BrowserRouter>
);

export default Routes;
