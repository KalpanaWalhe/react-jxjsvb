import React, { Component } from 'react';
export class ClassMsg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Welcome to visitor',
    };
  }
  changeMsg = () => {
    this.setState({
      message: 'Thank you for Subscribing!',
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMsg}>Subscribe</button>
      </div>
    );
  }
}
