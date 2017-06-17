import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';
import { List, ListItem,Rating } from 'react-native-elements';
import Test from './Test.js';

export default class ScreenC extends Component {

    constructor() {
        super()
        this.state = {
            hideTabBar: true,
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
            tabBarStyle.overflow = 'hidden';
            sceneStyle.paddingBottom = 0;
        }
        

        const list = [
            {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President',
                icon: 'av-timer'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman',
                icon: 'flight-takeoff'
            },
            {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President',
                icon: 'av-timer'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman',
                icon: 'flight-takeoff'
            },
            {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President',
                icon: 'av-timer'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman',
                icon: 'flight-takeoff'
            },
        ]

        const { navigate } = this.props.navigation;
        return (
            <List>
                {
                    list.map((item, i) => (
                        <ListItem
                            roundAvatar
                            key={i}
                            title={item.name}
                            subtitle={
                                <Rating type="heart"
                                readonly
                                fractions={5}
                                startingValue={1.57}
                                imageSize={25}
                                />}
                            avatar={{ uri: item.avatar_url }}
                            onPress={() => navigate('Test_Screens')}
                        />
                    ))
                }
            </List>
        )
    }
}