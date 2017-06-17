<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
<<<<<<< Updated upstream
import RadarChartScreen from './react_native_element/RadarChartScreen.js';
=======
import SplashScreen from 'react-native-splash-screen';
>>>>>>> Stashed changes

export default class AwesomeProject extends Component {
  render() {
    return (
      <RadarChartScreen />
    );
  }

  componentDidMount() {
    SplashScreen.hide();
  }

}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
