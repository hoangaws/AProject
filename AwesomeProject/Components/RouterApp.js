import { StackNavigator } from 'react-navigation';
import Login from './Login.js';
import Register from './Register.js';
import Welcome from './Welcome.js';

export const RouterApp = StackNavigator(
    {
        Login_Screens: { screen: Login },
        Register_Screens: { screen: Register },
        Welcome_Screens: { screen: Welcome }
    },
    {
        initialRouteName: 'Login_Screens',
    }
)