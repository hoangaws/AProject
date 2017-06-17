import { StackNavigator } from 'react-navigation';
import Login from './Login.js';
import Register from './Register.js';

export const RouterApp = StackNavigator(
    {
        Login_Screens: { screen: Login },
        Register_Screens: { screen: Register }
    },
    {
        initialRouteName: 'Login_Screens',
    }
)