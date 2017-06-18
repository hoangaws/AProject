import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { firebaseApp } from './FirebaseConfig.js';


export default class RealtimeDB extends Component {

    constructor(props) {
        super(props);
        this.itemRef = firebaseApp.database();
    }

    setDB() {
        this.itemRef.ref('KhoaHoc').set({
            ReactNative: 'khai giang 20/3',
            IOS: 'Khai giang 15/2',
            Android: 'Khai giang 18/2'
        })
    }

    pushDB() {
        this.itemRef.ref('Trung tam dao tao lap trinh').push({
            ReactNative: 'khai giang 20/3',
            IOS: 'Khai giang 15/2',
            Android: 'Khai giang 18/2'
        })
    }

    childDB() {
        this.itemRef.ref('KhoaHoc').child('Child Khoa hoc').push({
            ReactNative: 'khai giang 20/3',
            IOS: 'Khai giang 15/2',
            Android: 'Khai giang 18/2'
        })
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <TouchableOpacity style={{ backgroundColor: 'red' }}
                    onPress={() => { this.setDB() }} >
                    <Text style={{ color: 'blue', fontSize: 40 }}>Set DB</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: 'red' }}
                    onPress={() => { this.pushDB() }} >
                    <Text style={{ color: 'blue', fontSize: 40 }}>Push DB</Text>
                </TouchableOpacity>

                 <TouchableOpacity style={{ backgroundColor: 'red' }}
                    onPress={() => { this.childDB() }} >
                    <Text style={{ color: 'blue', fontSize: 40 }}>Child DB</Text>
                </TouchableOpacity>
            </View>
        );
    }

    componentDidMount() {
        SplashScreen.hide();
    }

}
