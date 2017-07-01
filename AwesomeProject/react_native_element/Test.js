import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Alert, Text, Button, TouchableOpacity } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';
import {
  AdMobBanner,
} from 'react-native-admob';
import { practice } from '../data/RC1/lesson1';
import TestFooter from './TestFooter';
import TestContent from './TestContent';

class UserDetail extends Component {

  static navigationOptions = {
    title: 'Test 123',
    headerTintColor: 'blue',
    headerRight: <Icon name='settings' color='#517fa4'
      size={33} containerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />,
  };

  constructor(props) {
    super(props);
    this.state = {
      stt: 0,
      press: "",
      showCheck: false,
      showExplain: false,
      showDiscuss: false,
      showTextExplain1: false,
      showTextExplain2: false
    };
  }

  _next() {
    if (this.state.stt < 51) {
      this.setState({
        stt: this.state.stt + 1,
      });
    }
  }

  _pre() {
    if (this.state.stt > 0) {
      this.setState({
        stt: this.state.stt - 1,
      });
    }
  }

  _close() {

  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.mainviewStyle}>
        <TestContent stt={this.state.stt} />
        <View style={styles.footer}>

          <Icon containerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            name='event-note'
            color='blue'
            size={33}
            onPress={() => navigate('C_Screens')}
          />

          <Icon containerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            name='fast-rewind'
            color='blue'
            size={33}
            onPress={() => this._pre()}
          />

          <Icon containerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            name='fast-forward'
            color='blue'
            size={33}
            onPress={() => this._next()}
          />

          <Icon containerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            name='playlist-add-check'
            color='blue'
            size={33}
            onPress={() => console.log('hello3')}
          />

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  mainviewStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  footer: {
    position: 'absolute',
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: 0,
    height: 58,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#949090'
  }
})

export default UserDetail;
