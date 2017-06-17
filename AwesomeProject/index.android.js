import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import RadarChartScreen from './react_native_element/RadarChartScreen.js';

export default class AwesomeProject extends Component {
  render() {
    return (
      <RadarChartScreen />
    );
  }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
