import React, { Component } from 'react';
import request from 'superagent';
import Item from './Item.js';

export default class AllProducts extends Component {
  constructor() {
    super();
    this.state = {
      productsData: [],
      category: ''
    };
  }
  _getData = category => {
    var URL = 'https://mallory-furniture-admin.now.sh/api/v1/products';
    if (category !== 'all') {
      URL += '?category=' + category.toLowerCase();
    }
    request
      .get(URL)
      .then(data => {
        var limit = this.props.limit;
        var products = data.body;
        if (limit > 0) {
          products = products.slice(1, parseInt(limit, 10) + 1);
        }
        this.setState({
          category: category,
          productsData: products
        })
      })
  }
  componentWillMount = () => {
    this._getData(this.props.category);
  }
  componentWillReceiveProps = () => {
    this._getData(this.props.category);
  }
  render() {
    let products = <p>Loading...</p>;
    let productsData = this.state.productsData
    if (typeof productsData !== 'undefined' && productsData.length > 0) {
      products = productsData.map((obj, index) => {
        return <Item itemData={obj} key={index}/>
      })
    }
    return (
      <div className="grid">
        {products}
      </div>
    );
  }
}
