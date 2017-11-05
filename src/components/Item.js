import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Item extends Component {
  render() {
    var itemData = this.props.itemData;
    var url = '/product/' + itemData._id;
    return (
      <div className="item">
        <Link to={url}><img src={itemData.imageLink} alt={itemData.item} /></Link>
        <h3>{itemData.item}</h3>
        <p>$ {itemData.price}</p>
      </div>
    );
  }
}
