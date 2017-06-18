import { StackNavigator } from 'react-navigation';
import Login from './Login.js';
import Register from './Register.js';
import Welcome from './Welcome.js';
import ImagePickerApp from './ImagePicker.js';
import RealtimeDB from './RealtimeDB.js';
import RealtimeDB2 from './RealtimeDB2.js';

export const RouterApp = StackNavigator(
    {
        Login_Screens: { screen: Login },
        Register_Screens: { screen: Register },
        Welcome_Screens: { screen: Welcome },
        RealtimeDB_Screens: { screen: RealtimeDB },
        RealtimeDB2_Screens: { screen: RealtimeDB2 },
        ImagePicker_Screens: { screen: ImagePickerApp }
    },
    {
        initialRouteName: 'RealtimeDB2_Screens',
    }
)