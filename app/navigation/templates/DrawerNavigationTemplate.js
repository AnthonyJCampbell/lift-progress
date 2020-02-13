import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import DrawerScreen from '../../../screens/templates/DrawerScreen'

import { TabNavigator } from './TabNavigationTemplate'

import { defaultStackNavigationOptions } from './defaultStackNavigationOptions';

const DrawerPageNavigator = createStackNavigator(
    {
        DrawerScreen: DrawerScreen
    },
    {
        defaultNavigationOptions: defaultStackNavigationOptions
    }
);

export const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: TabNavigator,
        navigationOptions: {
            drawerLabel: "Home"
        }
    },
    DrawerPage: {
        screen: DrawerPageNavigator,
        navigationOptions: {
            drawerLabel: "Drawer Page"
        }
    }
}, {
    contentOptions: {
        activeTintColor: "black",
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
})