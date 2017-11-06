import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CartItem extends Component {
  cartRemove = () => {
    var index = this.props.index;
    this.props.cartRemove(index);
  }
  render() {
    var itemData = this.props.itemData;
    var url = '/product/' + itemData._id;
    return (
      <div className="cart-item">
        <span className="close right black" onClick={this.cartRemove}>X</span>
        <Link to={url}><img src={itemData.imageLink} alt={itemData.item} /></Link>
        <h3>{itemData.item}</h3>
        <p>$ {itemData.price}</p>
      </div>
    );
  }
}
