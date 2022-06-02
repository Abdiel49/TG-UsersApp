import {StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import screens components
import Home from '../screens/Home';
import PostsScreen from '../screens/PostsScreen';
import PostDescription from '../screens/PostDescription';

// screen names variables
import {screens} from './screens';
import {colors} from '../styles/colors';

const Stack = createStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.background}
      />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.background,
            borderBottomWidth: 0,
          },
          headerTintColor: colors.white,
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name={screens.home}
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screens.posts}
          component={PostsScreen}
          options={{title: 'Posts'}}
        />
        <Stack.Screen
          name={screens.postDescription}
          component={PostDescription}
          options={{title: 'Description'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
