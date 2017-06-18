import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ListView
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { firebaseApp } from './FirebaseConfig.js';


export default class RealtimeDB2 extends Component {

    constructor(props) {
        super(props);
        this.itemRef = firebaseApp.database();
        this.state = {
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
            text: ''
        }
    }

    listemForItems(itemRef) {
        var items = [];
        this.itemRef.ref('TrungTamKhoaPham').child('NgonNguLapTrinh')
            .on('child_added', (dataSnapshot) => {
                items.push({
                    name: dataSnapshot.val().Ngonngu,
                    _key: dataSnapshot.key
                });
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(items)
                });
            });
        this.itemRef.ref('TrungTamKhoaPham').child('NgonNguLapTrinh')
            .on('child_removed', (dataSnapshot) => {
                items = items.filter((x) => x._key !== dataSnapshot.key);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(items)
                })
            })
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Text>Hello</Text>

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                        <TouchableOpacity style={{ borderWidth: 1, borderColor: 'gray', margin: 15 }}
                            onPress={() => this.removeDB(rowData)} >
                            <Text style={{ color: 'red', fontSize: 30, padding: 15 }}>
                                {rowData.name}
                            </Text>
                        </TouchableOpacity>
                    }
                />

                <TextInput
                    style={{ height: 40, width: 350, borderColor: 'gray', borderWidth: 2, padding: 5 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />
                <TouchableOpacity style={{ backgroundColor: 'green' }}
                    onPress={() => this.addDB()}
                >
                    <Text style={{ color: '#fff', padding: 15, fontSize: 28, textAlign: 'center' }}>
                        Thêm khóa học
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    removeDB(rowData) {
        this.itemRef.ref('TrungTamKhoaPham').child('NgonNguLapTrinh')
            .child(rowData._key).remove();
        this.listemForItems(this.itemRef);// để cho chính máy đó cập nhật lại khi xóa
    }

    addDB() {
        this.itemRef.ref('TrungTamKhoaPham').child('NgonNguLapTrinh')
            .push({
                Ngonngu: this.state.text
            });
        this.setState({
            text: ''
        })
    }

    componentDidMount() {
        SplashScreen.hide();
        this.listemForItems(this.itemRef);
    }

}
