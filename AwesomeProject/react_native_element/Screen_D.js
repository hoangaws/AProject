import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';

import { Tabs, Tab, Icon } from 'react-native-elements'


export default class ScreenD extends Component {
    constructor() {
        super()
        this.state = {
            hideTabBar: false,
        }
    }

    hideTabBar(value) {
        this.setState({
            hideTabBar: value
        });
    }
    render() {
        let tabBarStyle = {};
        let sceneStyle = {};
        if (this.state.hideTabBar) {
            tabBarStyle.height = 0;
            sceneStyle.paddingBottom = 0;
        }
        console.log('Profile1');
        return (
            <Text hideTabBar={this.hideTabBar.bind(this)}>Profile1</Text>
        )
    }
}