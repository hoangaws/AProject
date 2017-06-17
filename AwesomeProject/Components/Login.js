import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Alert
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { firebaseApp } from './FirebaseConfig.js';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    dangnhap() {
        const { navigate } = this.props.navigation;
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                Alert.alert(
                    'Alert Title',
                    'Đăng nhập thành công ' + this.state.email,
                    [
                        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                        { text: 'OK', onPress: () => navigate('Welcome_Screens')  },
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
                    'Đăng nhập thất bại',
                    [
                        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: false }
                )
            });
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'blue', fontSize: 40 }}>LOGIN</Text>
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
                    <TouchableOpacity style={{ backgroundColor: 'red' }}
                        onPress={() => { this.dangnhap() }} >
                        <Text style={{ color: 'white' }}>
                            Login
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: 'blue' }}
                        onPress={() => navigate('Register_Screens')} >
                        <Text style={{ color: 'white' }}>
                            Register
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    componentDidMount() {
        SplashScreen.hide();
    }
}
