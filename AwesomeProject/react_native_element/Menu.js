import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';

import { SideMenu, List, ListItem, Tabs, Tab, Icon } from 'react-native-elements';
import SplashScreen from 'react-native-splash-screen';
import App from './App.js';


class Menu extends Component {

    constructor() {
        super()
        this.state = { toggled: false }
    }

    toggleSideMenu() {
        this.setState({
            toggled: !this.state.toggled
        })
    }

    render() {
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
        ]

        const MenuComponent = (
            <View style={{ flex: 1, backgroundColor: '#ededed', paddingTop: 50 }}>
                <List containerStyle={{ marginBottom: 20 }}>
                    {
                        list.map((item, i) => (
                            <ListItem
                                roundAvatar
                                onPress={() => this.toggleSideMenu()}
                                avatar={{ uri: item.avatar_url }}
                                key={i}
                                title={item.name}
                                subtitle={item.subtitle} />
                        ))
                    }
                </List>
            </View>
        )
        return (
            <SideMenu
                MenuComponent={MenuComponent}
                toggled={this.state.toggled}>
                <App />
            </SideMenu>
        )
    }

    componentDidMount() {
        SplashScreen.hide();
    }
}

export default Menu;