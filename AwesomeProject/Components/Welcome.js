import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';

export default class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'blue', fontSize: 40 }}>WELCOME</Text>
            </View>
        );
    }

}
