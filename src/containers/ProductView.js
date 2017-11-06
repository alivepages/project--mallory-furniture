import React, { Component } from 'react';
import request from 'superagent';
import Product from '../components/Product'

export default class ProductView extends Component {
  constructor() {
    super();
    this.state = {
      productData: null,
      loading: false
    };
  }
  _getData = id => {
    this.setState({
      loading: true
    })
    var URL = "https://mallory-furniture-admin.now.sh/api/v1/products/" + id;
    request
      .get(URL)
      .then(data => {
        this.setState({
          productData: data.body,
          loading: false
        })
      })
  }
  componentWillMount = () => {
    this._getData(this.props.match.params.id);
  }
  componentWillReceiveProps = props => {
    this._getData(props.match.params.id);
  }
  render() {
    var product = <div></div>;
    if (this.state.loading) {
      product = <div className="error">Loading ... </div>;
    } else if (this.state.productData !== null) {
      product = <Product productData={this.state.productData} cartAdd={this.props.cartAdd} />;
    }
    return (
      <section>
        <div className="product">
            {product}
        </div>
      </section>
    );
  }
}
