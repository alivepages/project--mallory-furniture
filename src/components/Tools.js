import React, { Component } from 'react';

export default class Tools extends Component {
  render() {
    var total = this.props.getTotal();
    return (
      <div className="tools">
        <div>
          <button type="button" className="red" onClick={this.props.setFilterOff}>All Items</button>
          <button type="button" className="gray" onClick={this.props.setFilterOnSale}>On Sale</button>
        </div>
        <div className="showing">
          <span className="number">{total}</span> <span>items showing</span>
        </div>
      </div>
    );
  }
}
