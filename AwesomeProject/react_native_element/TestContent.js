import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Alert, Text, Button, TouchableOpacity } from 'react-native';
import { List, ListItem, Icon, Badge } from 'react-native-elements';
import {
    AdMobBanner,
} from 'react-native-admob';
import { practice } from '../data/RC1/lesson1';
import { connect } from 'react-redux';

class TestContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pressed: false,
            choose: ""
        }
    }

    _onPressButton1() {
        this.props.dispatch({ type: 'CLICK_SHOW' });
    }

    _onPressButton2() {
        this.props.dispatch({ type: 'CLICK_TIPS' });
    }

    _choose(chose) {
        this.props.dispatch({ type: 'CLICK_CHOOSE' });
        this.setState({
            choose: chose
        })
    }

    _check() {
        this.props.dispatch({ type: 'CLICK_CHECK' });
        this.pressed = true;
        switch (this.props.press) {
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
        let display1 = this.props.showTextExplain1 ? `${practice[this.props.stt].ShowExplain}` : '';
        let display2 = this.props.showTextExplain2 ? `${practice[this.props.stt].Tips}` : '';

        return (
            <ScrollView style={styles.scrollview}>


                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Question {practice[this.props.stt].Question} : </Text>
                        <TouchableOpacity style={this.props.showDiscuss ? styles.showbutton : styles.hidden} onPress={() => { this._discuss() }}>
                            <Text style={{ fontSize: 20, color: "dodgerblue", backgroundColor: "white", }} >Discuss</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={{ fontSize: 20, }}>{`${practice[this.props.stt].Content}`}</Text>

                    <View style={styles.button}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "baseline" }}>

                            <TouchableOpacity onPress={() => { this._choose("A") }} disabled={this.pressed}>
                                <View style={{ backgroundColor: 'rgba(0,0,0,0)' }}>
                                    <Text style={this.state.choose === "A" ? styles.optionChoose : styles.optionDefault} > (A) {`${practice[this.props.stt].OptionA}`} </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { this._choose("B") }} disabled={this.pressed}>
                                <Text style={this.state.choose === "B" ? styles.optionChoose : styles.optionDefault}> (B) {`${practice[this.props.stt].OptionB}`} </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { this._choose("C") }} disabled={this.pressed}>
                                <Text style={this.state.choose === "C" ? styles.optionChoose : styles.optionDefault} > (C) {`${practice[this.props.stt].OptionC}`} </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { this._choose("D") }} disabled={this.pressed}>
                                <Text style={this.state.choose === "D" ? styles.optionChoose : styles.optionDefault} > (D) {`${practice[this.props.stt].OptionD}`} </Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <TouchableOpacity style={this.props.showCheck ? styles.showbutton : styles.hidden}
                                onPress={() => { this._check() }}>
                                <Icon
                                    reverse
                                    name='ios-color-wand'
                                    type='ionicon'
                                    color='dodgerblue'
                                />
                            </TouchableOpacity>
                        </View>

                    </View>


                    <View style={styles.button}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <TouchableOpacity style={this.props.showExplain ? styles.showbutton : styles.hidden} onPress={() => { this.props.dispatch({ type: 'CLICK_SHOW' }); }}>
                                <Text style={{ fontSize: 20, color: "dodgerblue", backgroundColor: "white", }}>ShowExplain</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <TouchableOpacity style={this.props.showExplain ? styles.showbutton : styles.hidden} onPress={() => { this.props.dispatch({ type: 'CLICK_TIPS' }); }}>
                                <Text style={{ fontSize: 20, color: "dodgerblue", backgroundColor: "white", }}>Tips</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.textAnswer}>
                        <Text>{display1}{display2}</Text>
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

const styles = StyleSheet.create({

    mainviewStyle: {
        flex: 1,
        flexDirection: 'column',
    },

    scrollview: {
        margin: 15,
    },

    hidden: {
        width: 0,
        height: 0
    },
    showbutton: {
    },
    optionDefault: {
        fontSize: 20,
        color: "#0060cd",
    },
    optionChoose: {
        fontSize: 20,
        color: "white",
        backgroundColor: "#0060cd",
        borderRadius: 3,
    },
    button2: {
        marginTop: 20,
        justifyContent: 'space-between'
    },
    button: {
        marginTop: 20,
        flexDirection: 'row',
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

function mapStateToProps(state) {
    return {
        stt: state.stt,
        showCheck: state.showCheck,
        showExplain: state.showExplain,
        showDiscuss: state.showDiscuss,
        showTextExplain1: state.showTextExplain1,
        showTextExplain2: state.showTextExplain2
    };
}

export default connect(mapStateToProps)(TestContent);
