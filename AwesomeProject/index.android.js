import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {RouterApp} from './Components/RouterApp.js';

export default class AwesomeProject extends Component {
  render() {
    return (
      <RouterApp />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
