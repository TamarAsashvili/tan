import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Member from './components/Member';
import Contact from './components/Contact';
import Home from './components/Home';
import NotFound from './components/NotFound';
import ProductScreen from './components/ProductScreen';
import Gallery from './components/Gallery';

export default class MyRoutes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/member' component={Member} />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/product/:id?' component={Gallery} />
        <Route path='*' component={NotFound} />
      </Switch>
    );
  }
}
