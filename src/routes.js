import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Details } from './pages/Details';
const Routes = () => (
  <BrowserRouter>
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details" component={Details} />
      </Switch>
    </>
  </BrowserRouter>
);

export default Routes;
