import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Alert, Text, Button, TouchableOpacity } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';
import {
  AdMobBanner,
} from 'react-native-admob';
import { practice } from '../data/RC1/lesson1';
import TestFooter from './TestFooter';
import TestContent from './TestContent';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
  stt: 0,
  showCheck: false,
  showExplain: false,
  showDiscuss: false,
  showTextExplain1: false,
  showTextExplain2: false
};

const reducer = (state = defaultState, action) => {
  if (action.type === 'CLICK_CHECK') return {
    stt: state.stt, showCheck: !state.showCheck, showExplain: !state.showExplain,
    showDiscuss: !state.showDiscuss, showTextExplain1: state.showTextExplain1, showTextExplain2: state.showTextExplain2
  };
  if (action.type === 'CLICK_CHOOSE') return {
    stt: state.stt, showCheck: true, showExplain: state.showExplain,
    showDiscuss: state.showDiscuss, showTextExplain1: state.showTextExplain1, showTextExplain2: state.showTextExplain2
  };
  if (action.type === 'CLICK_SHOW') return {
    stt: state.stt, showCheck: state.showCheck, showExplain: state.showExplain,
    showDiscuss: state.showDiscuss, showTextExplain1: !state.showTextExplain1, showTextExplain2: false
  };
  if (action.type === 'CLICK_TIPS') return {
    stt: state.stt, showCheck: state.showCheck, showExplain: state.showExplain,
    showDiscuss: state.showDiscuss, showTextExplain1: false, showTextExplain2: !state.showTextExplain2
  };
  if (action.type === 'NEXT') return {
    stt: state.stt + 1, showCheck: state.showCheck, showExplain: state.showExplain,
    showDiscuss: state.showDiscuss, showTextExplain1: state.showTextExplain1, showTextExplain2: state.showTextExplain2
  };
  if (action.type === 'PRE') return {
    stt: state.stt - 1, showCheck: state.showCheck, showExplain: state.showExplain,
    showDiscuss: state.showDiscuss, showTextExplain1: state.showTextExplain1, showTextExplain2: state.showTextExplain2
  };
  return state;
};

const store = createStore(reducer);

class UserDetail extends Component {

  static navigationOptions = {
    title: 'Test 123',
    headerTintColor: 'blue',
    headerRight: <Icon name='settings' color='#517fa4'
      size={33} containerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />,
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Provider store={store}>
        <View style={styles.mainviewStyle}>
          <TestContent />
          <TestFooter />
        </View>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({

  mainviewStyle: {
    flex: 1,
    flexDirection: 'column',
  },
})

export default UserDetail;
