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
        }
    }

    listemForItems(itemRef) {
        var items = [];
        this.itemRef.ref('TrungTamKhoaPham').child('NgonNguLapTrinh')
            .on('child_added', (dataSnapshot) => {
                items.push({
                    name: dataSnapshot.val(),
                    key: dataSnapshot.key
                });
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(items)
                });
            });
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Text>Hello</Text>

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => 
                        <View style={{ borderWidth: 1, borderColor: 'gray', margin: 15 }}>
                            <Text style={{ color: 'red', fontSize: 30, padding: 15 }}>
                                {rowData.name}
                            </Text>
                        </View>
                    }
                />
            </View>
        );
    }

    componentDidMount() {
        SplashScreen.hide();
        this.listemForItems(this.itemRef);
    }

}
