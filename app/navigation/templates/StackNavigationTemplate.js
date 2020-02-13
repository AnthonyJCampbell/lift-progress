import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../../screens/templates/HomeScreen'
import StackScreen from '../../../screens/templates/StackScreen'

import { defaultStackNavigationOptions } from './defaultStackNavigationOptions';

export const StackNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: "Home"
        }
    },
    StackScreen: {
        screen: StackScreen,
        navigationOptions: {
            // headerTitle: "Secondary Screen"
        }
    },
},
    {
        // 'modal' makes the transition of a new page pop up from the bottom (kind of like a fade-in)
        mode: "modal",
        defaultNavigationOptions: defaultStackNavigationOptions
    }
);