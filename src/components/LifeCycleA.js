import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';
export default class LifeCycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Kalpana',
    };
    console.log('LifeCycleA Constructor');
  }
  static getDerivedStateFromProps(props, state) {
    console.log('LifeCycleA getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('LifeCycleA componentDidMount');
  }
  changeState = () => {
    this.setState({ name: 'Hello' });
  };
  shouldComponentUpdate(nextProps, nextState) {
    console.log('LifeCycleA shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifeCycleA getSnapshotBeforeupdate');
    return null;
  }
  componentDidUpdate() {
    console.log('LifeCycleA componenetDidUpdate');
  }
  render() {
    console.log('LifeCycleA render');
    return (
      <div>
        LifeCycleA
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB />
      </div>
    );
  }
}
