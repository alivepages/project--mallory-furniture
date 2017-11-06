import React, { Component } from 'react';
import Nav from './Nav.js';
import Cart from './Cart.js';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="header">
          <Cart cart={this.props.cart} />
          <Nav cartOpen={this.props.cart.cartOpen}/>
        </div>
      </header>
    );
  }
}
