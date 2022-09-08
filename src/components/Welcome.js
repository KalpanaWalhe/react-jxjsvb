import { Component } from 'react';
import React from 'react';
export class Welcome extends Component {
  render() {
    const { name, company } = this.props;
    return (
      <h1>
      
        Hello {name} Welcome to {company}
      </h1>
    );
  }
}
