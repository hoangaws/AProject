import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Alert, Text, Button, TouchableOpacity } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';
import {
    AdMobBanner,
} from 'react-native-admob';
import { practice } from '../data/RC1/lesson1';

class TestContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            press: "",
            showCheck: false,
            showExplain: false,
            showDiscuss: false,
            showTextExplain1: false,
            showTextExplain2: false
        };
    }

    _onPressButton1() {
        this.setState({
            showTextExplain1: !this.state.showTextExplain1,
            showTextExplain2: false,
        });
    }

    _onPressButton2() {
        this.setState({
            showTextExplain1: false,
            showTextExplain2: !this.state.showTextExplain2,
        });
    }

    _choose(chose) {
        this.setState({
            showCheck: true,
            press: chose,
        });
    }

    _check() {
        this.setState({
            showCheck: false,
            showExplain: true,
            showDiscuss: true,
        });

        switch (this.state.press) {
            case 'A':
                ;
            case 'B':
                ;
            case 'C':
                ;
            case 'D':
                ;
            default:
        }

    }


    render() {
        let display1 = this.state.showTextExplain1 ? `${practice[this.props.stt].ShowExplain}` : '';
        let display2 = this.state.showTextExplain2 ? `${practice[this.props.stt].Tips}` : '';


        return (

            <ScrollView style={styles.scrollview}>
                <View style={styles.questions}>

                    <View style={styles.textQuestions}>

                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Question {practice[this.props.stt].Question} : </Text>
                            <TouchableOpacity style={this.state.showDiscuss ? styles.showbutton : styles.hidden} onPress={() => { this._discuss() }}>
                                <Text style={{ fontSize: 20, color: "dodgerblue", backgroundColor: "white", }} >Discuss</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={{ fontSize: 20, }}>{`${practice[this.props.stt].Content}`}</Text>


                        <View style={styles.button}>
                            <View style={{ flex: 1 }}>

                                <TouchableOpacity onPress={() => { this._choose("A") }}>
                                    <Text style={this.state.press === "A" ? styles.optionChoose : styles.optionDefault} >(A) {`${practice[this.props.stt].OptionA}`}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => { this._choose("B") }}>
                                    <Text style={this.state.press === "B" ? styles.optionChoose : styles.optionDefault}>(B) {`${practice[this.props.stt].OptionB}`}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => { this._choose("C") }}>
                                    <Text style={this.state.press === "C" ? styles.optionChoose : styles.optionDefault} >(C) {`${practice[this.props.stt].OptionC}`}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => { this._choose("D") }}>
                                    <Text style={this.state.press === "D" ? styles.optionChoose : styles.optionDefault} >(D) {`${practice[this.props.stt].OptionD}`}</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={{
                                flex: 1, alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <TouchableOpacity style={this.state.showCheck ? styles.showbutton : styles.hidden} onPress={() => { this._check() }}>
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
                        <TouchableOpacity style={this.state.showExplain ? styles.showbutton : styles.hidden} onPress={() => { this._onPressButton1() }}>
                            <Text style={{ fontSize: 20, color: "dodgerblue", backgroundColor: "white", }}>ShowExplain</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={this.state.showExplain ? styles.showbutton : styles.hidden} onPress={() => { this._onPressButton2() }}>
                            <Text style={{ fontSize: 20, color: "dodgerblue", backgroundColor: "white", }}>Tips</Text>
                        </TouchableOpacity>
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



        );
    }
}

TestContent.propType = {
    stt: React.PropTypes.string,
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

    hidden: {
        width: 0,
        height: 0
    },
    showbutton: {
    },
    optionDefault: {
        fontSize: 20,
        color: "dodgerblue",
        backgroundColor: "white",
    },
    optionChoose: {
        fontSize: 20,
        color: "red",
        backgroundColor: "white",
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

    functionStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }
})

export default TestContent;
