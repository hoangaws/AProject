import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Alert, Text, Button, TouchableOpacity } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

class TestFooter extends Component {

    _next() {
        if (this.props.stt < 51) {
            this.props.dispatch({ type: 'NEXT' });
        }
    }

    _pre() {
        if (this.props.stt > 0) {
            this.props.dispatch({ type: 'PRE' });
        }
    }

    _close() {

    }

    render() {
        return (
            <View style={styles.footer}>

                <Icon containerStyle={styles.button}
                    name='event-note'
                    color='blue'
                    size={33}
                    onPress={() => navigate('C_Screens')}
                />

                <Icon containerStyle={styles.button}
                    name='fast-rewind'
                    color='blue'
                    size={33}
                    onPress={() => this._pre()}
                />

                <Icon containerStyle={styles.button}
                    name='fast-forward'
                    color='blue'
                    size={33}
                    onPress={() => this._next()}
                />

                <Icon containerStyle={styles.button}
                    name='playlist-add-check'
                    color='blue'
                    size={33}
                    onPress={() => console.log('hello3')}
                />

            </View>
        )
    }
}


function mapStateToProps(state) {
    return {
        stt: state.stt,
    };
}
export default connect(mapStateToProps)(TestFooter);


const styles = StyleSheet.create({
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
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})