import React, { Component } from 'react';
import request from 'superagent';
import Product from './Product'

export default class ProductView extends Component {
  constructor() {
    super();
    this.state = {
      productData: null
    };
  }
  _getData = id => {
    var URL = "https://mallory-furniture-admin.now.sh/api/v1/products/" + id;
    request
      .get(URL)
      .then(data => {
        this.setState({
          productData: data.body
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
    var product = <div className="error">Product not found</div>;
    if (this.state.productData !== null) {
      product = <Product productData={this.state.productData} />;
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
