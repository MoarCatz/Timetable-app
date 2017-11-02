import React, { Component } from 'react';
import {
  AppRegistry,
  Text
} from 'react-native';

class App extends Component {
  render() {
    return (
      <Text>Hello, World!</Text>
    );
  }
}

AppRegistry.registerComponent('TimetableApp', () => App);
