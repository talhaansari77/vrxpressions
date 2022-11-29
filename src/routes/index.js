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
<<<<<<< HEAD
    <NavigationContainer theme={MyTheme} >
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainStack" component={MainStack} />
      <Stack.Screen name="AuthStack" component={AuthStack} />

        {/* <Stack.Screen name="AuthStack" component={AuthStack} /> */}
=======
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName='MainStack' screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="MainStack" component={MainStack} />
>>>>>>> ffb32f89a7a81c20cf959ac997a28e3fef5596a1
      </Stack.Navigator>
      <StatusBar barStyle={'dark-content'} />
    </NavigationContainer>
  );
};

export default RootNavigator;
