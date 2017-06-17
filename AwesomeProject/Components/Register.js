import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';
import { firebaseApp } from './FirebaseConfig.js';

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    dangky() {
        const { navigate } = this.props.navigation;
        firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                Alert.alert(
                    'Alert Title',
                    'Đăng ký thành công ' + this.state.email,
                    [
                        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                        { text: 'OK', onPress: () => navigate('Login_Screens')  },
                    ],
                    { cancelable: false }
                )
                this.setState({
                    email: '',
                    password: ''
                })
            })
            .catch(function (error) {
                Alert.alert(
                    'Alert Title',
                    'Đăng ký thất bại',
                    [
                        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: false }
                )
            });
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'blue', fontSize: 40 }}>REGISTER</Text>
                <TextInput
                    style={{ height: 40, width: 350, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.text}
                />
                <TextInput
                    style={{ height: 40, width: 350, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.text}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Text style={{ color: 'green' }}
                            onPress={() => { this.dangky() }} >
                            Đăng ký
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
