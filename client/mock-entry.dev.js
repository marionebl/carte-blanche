console.log('Development Environment, mocking components!');

import React from 'React';

class ComponentOne extends React.Component {
  render() {
    return (
      <div>Hello</div>
    );
  }
}

class ComponentTwo extends React.Component {
  render() {
    return (
      <div>World</div>
    );
  }
}

window.components = {
  ComponentOne,
  ComponentTwo,
};

require('./client.js');
