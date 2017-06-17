import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Alert, Text, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import {
  AdMobBanner,
} from 'react-native-admob';

class UserDetail extends Component {

  static navigationOptions = {
    title: 'Test 123',
    headerTintColor: 'blue',
    headerRight: <Icon name='settings' color='#517fa4' 
     size={33} containerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />,
  };

  constructor(props) {
    super(props);
    this.state = { showText1: false, showText2: false };
  }

  _onPressButton1() {
    this.setState({
      showText1: !this.state.showText1,
      showText2: false,
    });
  }

  _onPressButton2() {
    this.setState({
      showText1: false,
      showText2: !this.state.showText2,
    });
  }

  render() {
    let display1 = this.state.showText1 ? 'Answer1' : '';
    let display2 = this.state.showText2 ? 'Answer2' : '';

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.mainviewStyle}>
        <ScrollView style={styles.scrollview}>
          <View style={styles.questions}>

            <View style={styles.textQuestions}>
              <Text>Questions : 1</Text>
              <Text>ssdswwrwwwwwwssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssswwwds
              dsdsdwwwwwwwwwcxdssssssssdddddddddd
              dsdssddddddddddddddc
              eeeeeeeeeeeeeeeessssssssssssssssseeee
              ttttttttttttttttttttttttttttt
              ttttttttttttttttttttttttttttttttxcx
              rewrefrgeryrtyrtyrtrytyrtyrtyryrt</Text>
            </View>

            <View style={styles.button}>
              <Button
                onPress={() => { this._onPressButton1() }}
                title="This looks great!"
              />
              <Button
                onPress={() => { this._onPressButton2() }}
                title="OK!"
                color="#841584"
              />
            </View>

            <View style={styles.textAnswer}>
              <Text>{display1}{display2}</Text>
            </View>

          </View>
          <View style={styles.admob}>
            <AdMobBanner
              bannerSize="fullBanner"
              adUnitID="ca-app-pub-7469861277535029/8882938994"
              testDeviceID="EMULATOR"
              didFailToReceiveAdWithError={(err) => { console.log("quang cao that bai" + err); }} />
          </View>
        </ScrollView>
        <View style={styles.footer}>

          <Icon containerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            name='event-note'
            color='yellow'
            size={33}
            onPress={() => navigate('C_Screens')}
          />

          <Icon containerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            name='fast-rewind'
            color='red'
            size={33}
            onPress={() => console.log('hello1')}
          />

          <Icon containerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            name='fast-forward'
            color='green'
            size={33}
            onPress={() => console.log('hello2')}
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

  _close() {

  }

}

const styles = StyleSheet.create({

  mainviewStyle: {
    flex: 1,
    flexDirection: 'column',
  },

  scrollview: {
    margin: 15,
  },
  questions: {
    justifyContent: 'center',
  },
  textQuestions: {

  },
  button: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textAnswer: {

  },
  admob: {
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: 0,
    height: 58,
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
  },
  functionStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  }
})

export default UserDetail;
