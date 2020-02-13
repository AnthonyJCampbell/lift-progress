import React from 'react'
import { createAppContainer } from 'react-navigation';
import { DrawerNavigator } from './templates/DrawerNavigationTemplate'

const Navigator = DrawerNavigator;

export default createAppContainer(Navigator);