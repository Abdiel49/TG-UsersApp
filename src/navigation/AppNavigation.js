import {StatusBar, useColorScheme} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import screens components
import Home from '../screens/Home';
// screen names variables
import {screens} from './screens';

const Stack = createStackNavigator();
const AppNavigation = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Stack.Navigator>
        <Stack.Screen
          name={screens.home}
          component={Home}
          options={{title: 'Home'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
