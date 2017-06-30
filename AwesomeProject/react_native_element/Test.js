import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Alert, Text, Button, TouchableOpacity } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';
import {
  AdMobBanner,
} from 'react-native-admob';
import { practice } from '../data/RC1/lesson1';

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
      showText1: false,
      showText2: false
    };
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

  _choose(chose) {

  }

  render() {
    let display1 = this.state.showText1 ? `${practice[this.state.stt].ShowExplain}` : '';
    let display2 = this.state.showText2 ? `${practice[this.state.stt].Tips}` : '';

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.mainviewStyle}>
        <ScrollView style={styles.scrollview}>
          <View style={styles.questions}>

            <View style={styles.textQuestions}>

              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Question {practice[this.state.stt].Question} : </Text>
              <Text style={{ fontSize: 20, }}>{`${practice[this.state.stt].Content}`}</Text>


              <View style={styles.button}>
                <View style={{ flex: 1 }}>

                  <TouchableOpacity onPress={() => { this._choose("A") }}>
                    <Text style={{ fontSize: 20, color: "dodgerblue", backgroundColor: "white", }} >(A) {`${practice[this.state.stt].OptionA}`}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => { this._choose("B") }}>
                    <Text style={{ fontSize: 20, color: "dodgerblue", backgroundColor: "white", }}>(B) {`${practice[this.state.stt].OptionB}`}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => { this._choose("C") }}>
                    <Text style={{ fontSize: 20, color: "dodgerblue", backgroundColor: "white", }}>(C) {`${practice[this.state.stt].OptionC}`}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => { this._choose("D") }}>
                    <Text style={{ fontSize: 20, color: "dodgerblue", backgroundColor: "white", }}>(D) {`${practice[this.state.stt].OptionD}`}</Text>
                  </TouchableOpacity>

                </View>
                <View style={{
                  flex: 1, alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <TouchableOpacity onPress={() => { this._choose("D") }}>
                    <Icon
                      reverse
                      name='ios-color-wand'
                      type='ionicon'
                      color='dodgerblue'
                    />
                  </TouchableOpacity>
                </View>
              </View>

            </View>

            <View style={styles.button}>
              <Button
                onPress={() => { this._onPressButton1() }}
                title="ShowExplain"
              />
              <Button
                onPress={() => { this._onPressButton2() }}
                title="Tips"
                color="#841584"
              />
            </View>

            <View style={styles.textAnswer}>
              <Text>{display1}{display2}</Text>
            </View>

          </View>

          <AdMobBanner
            bannerSize="fullBanner"
            adUnitID="ca-app-pub-7469861277535029/8882938994"
            testDeviceID="EMULATOR"
            didFailToReceiveAdWithError={(err) => { console.log("quang cao that bai" + err); }} />
        </ScrollView>
        <View style={styles.admob}>

        </View>
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

  _next() {
    if (this.state.stt < 51) {
      this.setState({
        stt: this.state.stt + 1,
        showText1: false,
        showText2: false,
      });
    }
  }

  _pre() {
    if (this.state.stt > 0) {
      this.setState({
        stt: this.state.stt - 1,
        showText1: false,
        showText2: false,
      });
    }
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
  button2: {
    marginTop: 20,
    justifyContent: 'space-between'
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
    alignItems: 'center',
    justifyContent: 'center',
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
