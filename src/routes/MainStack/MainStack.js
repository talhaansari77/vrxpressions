import {View, Text, Image, Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import ChatScreen from '../../screens/Main/Chat/ChatScreen';
import AudioCallScreen from '../../screens/Main/Chat/AudioCall/AudioCallScreen';
import VideoCallScreen from '../../screens/Main/Chat/VideoCall/VideoCallScreen';


const MainStack = () => {

  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={"Signout"}
    >
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="AudioCall" component={AudioCallScreen} />
      <Stack.Screen name="VideoCall" component={VideoCallScreen} />


      {/* <Stack.Screen name="Signout" component={SignOutScreen} /> */}


    </Stack.Navigator>
  );
 
};

export default MainStack;
