import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScheduleScreen from '../../../screens/Main/Schedule/ScheduleScreen';
import MeditationScreen from '../../../screens/Main/Meditation/MeditationScreen';
import Activities from '../../../screens/Main/Activities';



const ActivitiesStack = ({navigation}) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={"Activities"}
    >
             <Stack.Screen name="Activities" component={Activities} />

     <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} />

      <Stack.Screen name="MeditationScreen" component={MeditationScreen} />

  


    </Stack.Navigator>
  );
};

export default ActivitiesStack;