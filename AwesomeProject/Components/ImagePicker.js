import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
    ActivityIndicator,
    Platform
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { firebaseApp } from './FirebaseConfig.js';
var ImagePicker = require('react-native-image-picker');
import RNFetchBlob from 'react-native-fetch-blob';

const storage = firebaseApp.storage();
const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;
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

const uploadImage = (uri, mine = 'img/jpg') => {
    return new Promise((resolve, reject) => {
        const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
        const sessionId = new Date().getTime();
        let uploadBlob = null;
        const imageRef = storage.ref('images').child(`${sessionId}.jpg`);

        fs.readFile(uploadUri, 'base64')
            .then((data) => {
                console.log('1')
                return Blob.build(data, { type: `${mine}; BASE64` });
            })
            .then((blob) => {
                console.log('2')
                uploadBlob = blob
                return imageRef.put(blob, { contentType: mine })
            })
            .then(() => {
                console.log('3')
                uploadBlob.close()
                return imageRef.getDownloadURL()
            })
            .then((url) => {
                console.log('4')
                resolve(url)
            })
            .catch((error) => {
                console.log('5')
                reject(error)
            })
    })
}

export default class ImagePickerApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    pickImage() {
        ImagePicker.showImagePicker(options, (response) => {
            this.setState({ avatarSource: '' })

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
                uploadImage(response.uri)
                    .then(url => this.setState({ avatarSource: url }))
                    .catch(error => console.log(error))
            }
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {
                    (() => {
                        switch (this.state.avatarSource) {
                            case null:
                                return null
                            case '':
                                return <ActivityIndicator />
                            default:
                                return (
                                    <View>
                                        <Image
                                            style={{ width: 50, height: 50 }}
                                            source={{ uri: this.state.avatarSource }}
                                        />
                                        <Text>{this.state.avatarSource}</Text>
                                    </View>
                                )
                        }
                    })()
                }

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
