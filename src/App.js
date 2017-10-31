import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav'
import HomeView from './components/HomeView'
import TermsView from './components/TermsView'
import AboutView from './components/AboutView'
import AllProductsView from './components/AllProductsView'
import ProductView from './components/ProductView'
import CategoryView from './components/CategoryView'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={HomeView}/>
          <Route exact path="/about" component={AboutView}/>
          <Route exact path="/terms" component={TermsView}/>
          <Route exact path="/all-products" component={AllProductsView}/>
          <Route exact path="/product/:id" component={ProductView}/>
          <Route exact path="/category/:id" component={CategoryView}/>
        </Switch>
      </div>
    );
  }
}

export default App;
