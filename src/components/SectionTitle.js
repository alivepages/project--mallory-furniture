import React, { Component } from 'react';

export default class Title extends Component {
  render() {
    return (
      <div className="SectionTitle">
        <h2 className="title">{this.props.title}</h2>
        <p className="subtitle">{this.props.subtitle}</p>
      </div>
    );
  }
}
