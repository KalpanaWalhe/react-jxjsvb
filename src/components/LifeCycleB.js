import React, { Component } from 'react';

export default class LifeCycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Kalpana',
    };
    console.log('LifeCycleB Constructor');
  }
  static getDerivedStateFromProps(props, state) {
    console.log('LifeCycleB getDerivedStateFromProps');
    return null;
  }
  
  componentDidMount() {
    console.log('LifeCycleB componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('LifeCycleB shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifeCycleB getSnapshotBeforeupdate');
    return null;
  }
  componentDidUpdate() {
    console.log('LifeCycleB componenetDidUpdate');
  }
  render() {
    console.log('LifeCycleB render');
    return <div>LifeCycleB</div>;
  }
}
