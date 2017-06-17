import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';

import { Tabs, Tab, Icon } from 'react-native-elements'


export default class ScreenB extends Component {
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
        console.log('Profile');
        return (
            <View hideTabBar={this.hideTabBar.bind(this)}>
                <Icon
                    raised
                    name='rowing' />

                <Icon
                    raised
                    name='g-translate'
                    color='#00aced' 
                    onPress={() => console.log('hello1')} 
                />

                <Icon
                    raised
                    name='sc-telegram'
                    type='evilicon'
                    color='#517fa4'
                    onPress={() => console.log('hello2')} 
                />

                <Icon
                    reverse
                    name='ios-american-football'
                    type='ionicon'
                    color='#517fa4'
                    onPress={() => console.log('hello3')} 
                />

                <Icon
                    raised
                    name='heartbeat'
                    type='font-awesome'
                    color='#f50'
                    onPress={() => console.log('hello4')} 
                />

            </View>
        )
    }
}