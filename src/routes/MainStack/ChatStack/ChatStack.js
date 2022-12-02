import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PeopleScreen from '../../../screens/Main/Chat/People/PeopleScreen';
import ChatScreen from '../../../screens/Main/Chat/ChatScreen';
import AudioCallScreen from '../../../screens/Main/Chat/AudioCall/AudioCallScreen';
import VideoCallScreen from '../../../screens/Main/Chat/VideoCall/VideoCallScreen';
import AccountSetting from '../../../screens/Main/AccountSetting.js/AccountSetting';


const ChatStack = ({navigation}) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={"PeopleScreen"}
    >
     <Stack.Screen name="PeopleScreen" component={PeopleScreen} />

      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="AudioCall" component={AudioCallScreen} />
     <Stack.Screen name="VideoCall" component={VideoCallScreen} />
  


    </Stack.Navigator>
  );
};

export default ChatStack;
