import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Questions from './src/screens/Questions';
import Calendar from './src/screens/Calendar';
import Profile from './src/screens/Profile';

const HomeScreen = TabNavigator({
  Questions: {
    screen: Questions
  },
  Calendar: {
    screen: Calendar
  },
  Profile: {
    screen: Profile
  }
});

export default StackNavigator({
  Home: {
    screen: HomeScreen
  }
});
