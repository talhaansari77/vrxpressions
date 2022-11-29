import {View, Text, Image, Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SummaryScreen from '../../screens/Main/Summary/SummaryScreen';
import Activities from '../../screens/Main/Activities';
import MembershipScreen from '../../screens/Main/Membership/MembershipScreen';
import ProfileScreen from '../../screens/Main/Profile/ProfileScreen';
import ProfileSettingScreen from '../../screens/Main/ProfileSetting/ProfileSettingScreen';
import AccountSetting from '../../screens/Main/AccountSetting.js/AccountSetting';
import NotificationSettingScreen from '../../screens/Main/NotificationSetting/NotificationSettingScreen';
import DocumentationList from '../../screens/Main/Documentation/DocumentationList/DocumentationList';
import TermsAndConditions from '../../screens/Main/Documentation/DocumentationDetail/TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from '../../screens/Main/Documentation/DocumentationDetail/PrivacyPolicy';
import Disclaimer from '../../screens/Main/Documentation/DocumentationDetail/Disclaimer/Disclaimer';
import NotificationScreen from '../../screens/Main/Notification/NotificationScreen';
import MemberShipMenu from '../../screens/Main/MemberShipMenu';
import MusicPlayerScreen from '../../screens/Main/MusicPlayer/MusicPlayerScreen';

const MainStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      // initialRouteName={'MemberShipMenu'}
    >
      <Stack.Screen name="SummaryScreen" component={SummaryScreen} />
      <Stack.Screen name="ActivitiesScreen" component={Activities} />
      <Stack.Screen name="MembershipScreen" component={MembershipScreen} />
      <Stack.Screen name="MemberShipMenu" component={MemberShipMenu} />


      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen
        name="ProfileSettingScreen"
        component={ProfileSettingScreen}
      />
      <Stack.Screen name="AccountSetting" component={AccountSetting} />
      <Stack.Screen
        name="NotificationSettingScreen"
        component={NotificationSettingScreen}
      />
      <Stack.Screen name="DocumentationList" component={DocumentationList} />
      <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="Disclaimer" component={Disclaimer} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen name="MusicPlayerScreen" component={MusicPlayerScreen} />



    </Stack.Navigator>
  );
};

export default MainStack;
