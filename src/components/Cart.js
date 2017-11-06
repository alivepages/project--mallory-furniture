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
    return (
      <div className={style}>
        <div className="cart-header">
          <span className="close" onClick={this.props.cart.cartClose}>X</span>
          <span className="cart-title">Your Cart</span>
          <span className="close hidden">X</span>
        </div>
        <div className="grid products">
          {CartItems}
        </div>
      </div>
    );
  }
}
