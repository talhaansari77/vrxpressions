import {View, Text, Image, Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
<<<<<<< HEAD
import ProfileScreen from '../../screens/Main/Profile/ProfileScreen';
import ProfileSettingScreen from '../../screens/Main/ProfileSetting/ProfileSettingScreen';
import AccountSetting from '../../screens/Main/AccountSetting.js/AccountSetting';
import NotificationSettingScreen from '../../screens/Main/NotificationSetting/NotificationSettingScreen';
import MemberShipScreen from '../../screens/Main/MemberShip/MemberShipScreen';
import DocumentationList from '../../screens/Main/Documentation/DocumentationList/DocumentationList';
import TermsAndConditions from '../../screens/Main/Documentation/DocumentationDetail/TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from '../../screens/Main/Documentation/DocumentationDetail/PrivacyPolicy';
import Disclaimer from '../../screens/Main/Documentation/DocumentationDetail/Disclaimer/Disclaimer';
import NotificationScreen from '../../screens/Main/Notification/NotificationScreen';
// import SignOutScreen from '../../screens/Main/SignOut/SignOutScreen';
=======
import SummaryScreen from '../../screens/Main/Summary/SummaryScreen';
// import Summary from '../../screens/Auth/Login copy';
>>>>>>> ffb32f89a7a81c20cf959ac997a28e3fef5596a1

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

<<<<<<< HEAD
const MainStack = () => {

  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={"NotificationScreen"}
    >
      {/* <Stack.Screen name="AddDesign" component={AddDesignScreen} /> */}
      {/* <Stack.Screen name="Signout" component={SignOutScreen} /> */}
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="ProfileSettingScreen" component={ProfileSettingScreen} />
      <Stack.Screen name="AccountSetting" component={AccountSetting} />
      <Stack.Screen name="NotificationSettingScreen" component={NotificationSettingScreen} />
      <Stack.Screen name="MemberShipScreen" component={MemberShipScreen} />
      <Stack.Screen name="DocumentationList" component={DocumentationList} />
      <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="Disclaimer" component={Disclaimer} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />


    </Stack.Navigator>
  );
 
};


=======
>>>>>>> ffb32f89a7a81c20cf959ac997a28e3fef5596a1
export default MainStack;
