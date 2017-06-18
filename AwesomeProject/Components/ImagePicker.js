import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { firebaseApp } from './FirebaseConfig.js';

var ImagePicker = require('react-native-image-picker');
var options = {
    title: 'Select Avatar',
    customButtons: [
        { name: 'fb', title: 'Choose Photo from Facebook' },
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

export default class ImagePickerApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            avatarSource: ''
        }
    }

    pickImage() {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                });
            }
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={this.state.avatarSource} style={{ height: 150, width: 150 }} />
                <TouchableOpacity style={{ backgroundColor: 'red' }}
                    onPress={() => { this.pickImage() }} >
                    <Text style={{ color: 'blue', fontSize: 40 }}>UPLOAD FILE</Text>
                </TouchableOpacity>
            </View>
        );
    }

    componentDidMount() {
        SplashScreen.hide();
    }

}
