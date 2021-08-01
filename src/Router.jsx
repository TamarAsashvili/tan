import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Member from './components/Member';
import Contact from './components/Contact';
import Home from './components/Home';
import NotFound from './components/NotFound';
import ProductScreen from './components/ProductScreen';

export default class MyRoutes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/member' component={Member} />
        <Route exact path='/product/:id' component={ProductScreen} />
        <Route path='*' component={NotFound} />
      </Switch>
    );
  }
}
