import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Routers} from './react_native_element/Routers.js';

export default class AwesomeProject extends Component {
  render() {
    return (
      <Routers />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
