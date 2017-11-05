import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    var productData = this.props.productData;
    return (
      <section>
        <img src={productData.imageLink} alt={productData.item} />
        <div className="product-data">
          <h2>{productData.item}</h2>
          <p className="price">${productData.price}</p>
          <hr/>
          <div className="grid">
            <div><span>Condition</span><br/>{productData.condition}</div>
            <div><span>Measuremments</span><br/>W:{productData.width} L:{productData.length} H:{productData.height}</div>
            <div><button className="add-to-cart">Add to Cart</button></div>
          </div>
        </div>
      </section>
    );
  }
}
