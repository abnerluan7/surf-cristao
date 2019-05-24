import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import SplashScreen from '../screens/intro/SplashScreen';
import WellScreen from '../screens/intro/WellScreen';
import InsedScreen from '../screens/intro/InsedScreen';
import NotifScreen from '../screens/intro/NotifScreen';
import ScaleScreen from '../screens/intro/ScaleScreen';
import LocScreen from '../screens/intro/LocScreen';

export default createAppContainer(createSwitchNavigator(
  {
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: SplashScreen,
  Well: WellScreen,
  Insed: InsedScreen,
  Notif: NotifScreen,
  Scale: ScaleScreen,
  Loc: LocScreen,
  App: MainTabNavigator
  }
  

));