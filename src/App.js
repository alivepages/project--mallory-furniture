import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import HomeView from './containers/HomeView'
import TermsView from './containers/TermsView'
import AboutView from './containers/AboutView'
import AllProductsView from './containers/AllProductsView'
import ProductView from './containers/ProductView'
import CategoryView from './containers/CategoryView'
import NotFound from './containers/NotFound';

class App extends Component {
  constructor() {
    super();
    this.state = {
      hidden: true,
      cartData: []
    };
  }

  cartOpen = ev => {
    this.setState({
      hidden: false
    })
  }

  cartClose = ev => {
    this.setState({
      hidden: true
    })
  }

  cartAdd = data => {
    if (data !== '') {
      var cartData = this.state.cartData;
      cartData.push(data);
      this.setState({
        cartData: cartData
      })
    }
  }

  cartRemove = index => {
    if (index > -1) {
      var cartData = this.state.cartData;
      cartData.splice(index, 1);
      this.setState({
        cartData: cartData
      })
    }
  }

  render() {
    var cart = this.state;
    cart.cartOpen = this.cartOpen;
    cart.cartClose = this.cartClose;
    cart.cartRemove = this.cartRemove;
    return (
      <div className="App">
        <Header cart={cart} />
        <Switch>
          <Route exact path="/" component={HomeView}/>
          <Route exact path="/about" component={AboutView}/>
          <Route exact path="/terms" component={TermsView}/>
          <Route exact path="/all-products" component={AllProductsView}/>
          <Route exact path="/category/:id" component={CategoryView}/>
          <Route path="/product/:id" render = {(props) => (
            <ProductView {... props} cartAdd={this.cartAdd} />
          )} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
