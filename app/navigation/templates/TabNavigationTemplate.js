import React from 'react'
import { Platform, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import TabScreen from '../../../screens/templates/TabScreen'

import { StackNavigator } from './StackNavigationTemplate';

import { defaultStackNavigationOptions } from './defaultStackNavigationOptions';

const tabStackNavigator = createStackNavigator(
    {
        Favorites: TabScreen,
    },
    {
        // initialRouteName: 'Categories',
        defaultNavigationOptions: defaultStackNavigationOptions
    }
);


const tabScreenConfig = {
    Home: {
        tabBarLabel: "Here",
        screen: StackNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (
                    <Ionicons name="ios-home" size={25} color="black" />
                );
            },
            tabBarColor: "#ff6f00",
            tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans-bold' }}>Home</Text> : ""
        }
    },
    Favorites: {
        screen: tabStackNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons name="ios-star" size={25} color="black" />;
            },
            tabBarColor: '#ff6f00',
            tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans-bold' }}>Favorites</Text> : ""
        }
    }
};



export const TabNavigator =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator(tabScreenConfig, {
            activeTintColor: 'white',
            shifting: true,
            barStyle: {
                backgroundColor: "#000"
            },

        })
        : createBottomTabNavigator(tabScreenConfig, {
            tabBarOptions: {
                labelStyle: {
                    fontFamily: 'open-sans-bold'
                },
                activeTintColor: "black"
            }
        });