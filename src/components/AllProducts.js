import React, { Component } from 'react';
import request from 'superagent';
import Item from './Item.js';
import Tools from './Tools.js';

export default class AllProducts extends Component {
  constructor() {
    super();
    this.state = {
      productsData: [],
      category: '',
      filterOnSale: false,
      loading: true
    };
  }

  _getData = category => {
    this.setState({
      loading: true
    })
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
          productsData: products,
          loading: false
        })
      })
  }

  setTotal = (total) => {
    this.setState({
      total: total
    })
  }

  getTotal = () => {
    var products = this.state.productsData
    .filter((product) => {
      return (!this.state.filterOnSale || product.onSale === true)
    });
    return products.length;
  }

  setFilterOnSale = () => {
    this.setState({
      filterOnSale: true
    })
  }

  setFilterOff = () => {
    this.setState({
      filterOnSale: false
    })
  }

  componentWillMount = () => {
    this._getData(this.props.category);
  }

  componentWillReceiveProps = () => {
    this._getData(this.props.category);
  }

  render() {
    let products = <p className="error">Loading ...</p>;
    let productsData = this.state.productsData
    if (!this.state.loading) {
      products = productsData
      .filter((product) => {
        return (!this.state.filterOnSale || product.onSale === true)
      })
      .map((obj, index) => {
        return <Item itemData={obj} key={index}/>
      });
    }

    var tools = '';
    if (this.props.tools !== 'no') {
      tools = <Tools getTotal={this.getTotal} setFilterOnSale={this.setFilterOnSale} setFilterOff={this.setFilterOff}/>
    }
    return (
      <div>
        {tools}
        <div className="grid">
          {products}
        </div>
      </div>
    );
  }
}
