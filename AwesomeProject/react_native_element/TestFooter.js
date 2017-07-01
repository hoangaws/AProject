import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Alert, Text, Button, TouchableOpacity } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';


export default class TestFooter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stt: 0,
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

        return (
            <View style={styles1.footer}>

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
        )
    }
}


const styles1 = StyleSheet.create({
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