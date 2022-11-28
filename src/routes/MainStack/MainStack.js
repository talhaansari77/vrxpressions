import {View, Text, Image, Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SummaryScreen from '../../screens/Main/Summary/SummaryScreen';
// import Summary from '../../screens/Auth/Login copy';

const MainStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Signout'}>
      <Stack.Screen name="SummaryScreen" component={SummaryScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
