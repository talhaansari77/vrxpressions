import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileSettingScreen from '../../../screens/Main/ProfileSetting/ProfileSettingScreen';
import AccountSetting from '../../../screens/Main/AccountSetting.js/AccountSetting';
import NotificationSettingScreen from '../../../screens/Main/NotificationSetting/NotificationSettingScreen';
import DocumentationList from '../../../screens/Main/Documentation/DocumentationList/DocumentationList';
import MemberShipMenu from '../../../screens/Main/MemberShipMenu';
// import MembershipScreen from '../../../screens/Main/Membership/MembershipScreen';
import TermsAndConditions from '../../../screens/Main/Documentation/DocumentationDetail/TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from '../../../screens/Main/Documentation/DocumentationDetail/PrivacyPolicy';
import Disclaimer from '../../../screens/Main/Documentation/DocumentationDetail/Disclaimer/Disclaimer';
import MembershipScreen from '../../../screens/Main/Membership/MembershipScreen';
import PasswordSetting from '../../../screens/Main/PasswordSetting/PasswordSetting';

const SettingStack = ({navigation}) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'ProfileSettingScreen'}>
      <Stack.Screen
        name="ProfileSettingScreen"
        component={ProfileSettingScreen}
      />

      <Stack.Screen name="AccountSetting" component={AccountSetting} />
      <Stack.Screen name="PasswordSetting" component={PasswordSetting} />

      <Stack.Screen
        name="NotificationSettingScreen"
        component={NotificationSettingScreen}
      />

      <Stack.Screen name="MemberShipMenu" component={MemberShipMenu} />
      <Stack.Screen name="MemberShipScreen" component={MembershipScreen} />

      <Stack.Screen name="DocumentationList" component={DocumentStack} />
    </Stack.Navigator>
  );
};

export const DocumentStack = ({navigation}) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'DocumentationScreen'}>
      <Stack.Screen name="DocumentationScreen" component={DocumentationList} />

      <Stack.Screen
        name="TermsAndConditionsScreen"
        component={TermsAndConditions}
      />

      <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicy} />
      <Stack.Screen name="DisclaimerScreen" component={Disclaimer} />
    </Stack.Navigator>
  );
};

export default SettingStack;
