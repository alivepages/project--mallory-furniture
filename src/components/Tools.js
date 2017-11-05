import React, { Component } from 'react';

export default class Tools extends Component {
  render() {
    return (
      <div className="tools">
        <div>
          <button type="button" className="red">All Items</button>
          <button type="button" className="gray">On Sale</button>
        </div>
        <div className="showing">
          <span className="number">61</span> <span>items showing</span>
        </div>
      </div>
    );
  }
}
