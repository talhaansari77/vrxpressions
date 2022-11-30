import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Signup from '../../screens/Auth/Signup';
import LoginScreen from '../../screens/Auth/Login/LoginScreen';
import OtpScreen from '../../screens/Auth/Otp/OtpScreen';
import ResetPassword from '../../screens/Auth/ResetPassword';
import ConfirmReset from '../../screens/Auth/ConfirmReset/ConfirmReset';
import GetStarted from '../../screens/Auth/GetStarted/GetStarted';
import Interests from '../../screens/Auth/Interests';

const AuthStack = ({navigation}) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={"Interests"}
    >
      <Stack.Screen name="SignupScreen" component={Signup} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="ConfirmReset" component={ConfirmReset} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Interests" component={Interests} />
  


    </Stack.Navigator>
  );
};

export default AuthStack;
