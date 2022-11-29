import {View, Text, Image, Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SummaryScreen from '../../screens/Main/Summary/SummaryScreen';
import Activities from '../../screens/Main/Activities';
import MembershipScreen from '../../screens/Main/Membership';
// import Summary from '../../screens/Auth/Login copy';

const MainStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      // initialRouteName={'MembershipScreen'}
      >
      <Stack.Screen name="SummaryScreen" component={SummaryScreen} />
      <Stack.Screen name="ActivitiesScreen" component={Activities} />
      <Stack.Screen name="MembershipScreen" component={MembershipScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
