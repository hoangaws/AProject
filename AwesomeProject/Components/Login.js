import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';


export default class Login extends Component {

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
                        onPress={() => navigate('Login_Screens')} >
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
