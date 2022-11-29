import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import AuthStack from './AuthStack/AuthStack';
import {StatusBar} from 'react-native';
import MainStack from './MainStack/MainStack';

const RootNavigator = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#f1e6fe',
    },
  };

  const Stack = createStackNavigator();
  return (

    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="MainStack"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="MainStack" component={MainStack} />
      </Stack.Navigator>
      <StatusBar barStyle={'dark-content'} />
    </NavigationContainer>
  );
};

export default RootNavigator;
