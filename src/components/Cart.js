import React, { Component } from 'react';
import CartItem from './CartItem';

export default class Cart extends Component {
  render() {
    var style = 'scart';
    if (this.props.cart.hidden) {
      style += ' hidden';
    }
    var cartData = this.props.cart.cartData;
    var CartItems = cartData.map((obj, index) => {
        return <CartItem itemData={obj} cartRemove={this.props.cart.cartRemove} index={index} key={index}/>
    });
    var styleItems = 'grid products';
    if (CartItems.length < 1) {
      styleItems += ' no-item';
      CartItems = <span>No items in Cart</span>
    }
    return (
      <div className={style}>
        <div className="cart-header">
          <span className="close" onClick={this.props.cart.cartClose}>X</span>
          <span className="cart-title">Your Cart</span>
          <span className="close hidden">X</span>
        </div>
        <div className={styleItems}>
          {CartItems}
        </div>
      </div>
    );
  }
}
