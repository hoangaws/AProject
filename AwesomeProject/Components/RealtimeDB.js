import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { firebaseApp } from './FirebaseConfig.js';


export default class RealtimeDB extends Component {

    constructor(props) {
        super(props);
        this.itemRef = firebaseApp.database();
        this.state = {
            text: ''
        }
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

    //lientuc cap nhat,kich hoat lai event
    onDB() {
        this.itemRef.ref('KhoaHoc').child('Android').on('value', function (snapshot) {
            alert(snapshot.val())
        })
    }
    //ko kich hoat lai event
    onceDB() {
        this.itemRef.ref('KhoaHoc').child('Android').once('value', function (snapshot) {
            alert(snapshot.val())
        })
    }

    nhapdulieu() {
        this.itemRef.ref('ChatRoom').child('PhongChat').push({
            LapTrinh: this.state.text
        });
        this.setState({
            text: ''
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

                <TouchableOpacity style={{ backgroundColor: 'red' }}
                    onPress={() => { this.onDB() }} >
                    <Text style={{ color: 'blue', fontSize: 40 }}>On DB</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'red' }}
                    onPress={() => { this.onceDB() }} >
                    <Text style={{ color: 'blue', fontSize: 40 }}>Once DB</Text>
                </TouchableOpacity>

                <TextInput
                    style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />
                <TouchableOpacity style={{ backgroundColor: 'red' }}
                    onPress={() => { this.nhapdulieu() }} >
                    <Text style={{ color: 'blue', fontSize: 40 }}>Them du lieu</Text>
                </TouchableOpacity>
            </View>
        );
    }

    componentDidMount() {
        SplashScreen.hide();
    }

}
