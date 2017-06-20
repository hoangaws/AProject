import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';

import { SideMenu, List, Tabs, Tab, Icon, ListItem, Rating, ButtonGroup, Badge, Button } from 'react-native-elements';
import SplashScreen from 'react-native-splash-screen';
const Realm = require('realm');

export default class RealmClass extends Component {


    componentDidMount() {
        SplashScreen.hide();
    }
    render() {
        let realm = new Realm({
            schema: [{ name: 'Dog', properties: { name: 'string' } }]
        });

        realm.write(() => {
            realm.create('Dog', { name: 'Rex' });
            realm.create('Dog', { name: 'Rex' });
            realm.create('Dog', { name: 'Rex' });
            realm.create('Dog', { name: 'Rex' });
            realm.create('Dog', { name: 'Rex' });
        });

        return (
            <View>
                <Text>
                    Count of Dogs in Realm: {realm.objects('Dog').length}
                </Text>
            </View>
        );
    }
}