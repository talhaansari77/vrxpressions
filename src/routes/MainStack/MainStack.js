import {View, Text, Image, Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ChatScreen from '../../screens/Main/Chat/ChatScreen';
import AudioCallScreen from '../../screens/Main/Chat/AudioCall/AudioCallScreen';
import VideoCallScreen from '../../screens/Main/Chat/VideoCall/VideoCallScreen';
import Activities from '../../screens/Main/Activities';
// import MembershipScreen from '../../screens/Main/Membership/MembershipScreen';
import ProfileScreen from '../../screens/Main/Profile/ProfileScreen';
import ProfileSettingScreen from '../../screens/Main/ProfileSetting/ProfileSettingScreen';
import AccountSetting from '../../screens/Main/AccountSetting.js/AccountSetting';
import NotificationSettingScreen from '../../screens/Main/NotificationSetting/NotificationSettingScreen';
import DocumentationList from '../../screens/Main/Documentation/DocumentationList/DocumentationList';
import TermsAndConditions from '../../screens/Main/Documentation/DocumentationDetail/TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from '../../screens/Main/Documentation/DocumentationDetail/PrivacyPolicy';
import Disclaimer from '../../screens/Main/Documentation/DocumentationDetail/Disclaimer/Disclaimer';
import NotificationScreen from '../../screens/Main/Notification/NotificationScreen';
// import SignOutScreen from '../../screens/Main/SignOut/SignOutScreen';
import SummaryScreen from '../../screens/Main/Summary/SummaryScreen';
import PeopleScreen from '../../screens/Main/Chat/People/PeopleScreen';
import ScheduleScreen from '../../screens/Main/Schedule/ScheduleScreen';
import MeditationScreen from '../../screens/Main/Meditation/MeditationScreen';
import MemberShipMenu from '../../screens/Main/MemberShipMenu';
import MusicPlayerScreen from '../../screens/Main/MusicPlayer/MusicPlayerScreen';
import {colors} from '../../utils/Colors';
import Foundation from 'react-native-vector-icons/Foundation';
import {icons} from '../../assets/icons';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import ChatStack from './ChatStack/ChatStack';
import SettingStack from './SettingStack/SettingStack';
// import Summary from '../../screens/Auth/Login copy';

const MainStack = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.tabColor,
          height: verticalScale(55),
          borderTopLeftRadius: scale(20),
          borderTopRightRadius: scale(20),

          shadowColor: Platform.OS == 'ios' ? '#212529' : colors.black,
          shadowRadius: 8,
          elevation: 10,
          shadowOpacity: 0.7,
          shadowOffset: {width: 1, height: 4},

          paddingHorizontal: scale(10),
          paddingTop: Platform.OS == 'ios' ? 20 : 0,
        },
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'SummaryScreen') {
            iconName = icons.home;
            // return (
            //   <Foundation
            //     name="home"
            //     color={colors.white}
            //     size={moderateScale(25)}
            //   />
            // );
          } else if (route.name === 'ActivitiesScreen') {
            iconName = icons.exercise;
          }
           else if (route.name === 'ChatStack') {
            iconName = icons.chat;
          }
          else if (route.name === 'ProfileScreen') {
            iconName = icons.man;
          }
          else if (route.name === 'NotificationScreen') {
            iconName = icons.noti;
          }
          else if (route.name === 'SettingStack') {
            iconName = icons.setting;
          }

          return (
            <Image
              resizeMode="contain"
              source={iconName}
              style={{
                width: moderateScale(18),
                height: verticalScale(18),
                tintColor: focused ? colors.secondary : colors.white,
              }}
            />
          );
        },
      })}
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: '#694fad'}}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: '#000',
        // activeBackgroundColor: '#fff',
        showIcon: true,
      }}
      initialRouteName="SummaryScreen">
      <Tab.Screen name="SummaryScreen" component={SummaryScreen} />
      <Tab.Screen name="ActivitiesScreen" component={Activities} />
      
      <Tab.Screen name="ChatStack" component={ChatStack} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />

      <Tab.Screen
        name="NotificationScreen"
        component={NotificationScreen}
      />
            <Tab.Screen name="SettingStack" component={SettingStack} />



      {/* <Tab.Screen name="Store" component={StoreScreen} /> */}

      {/* <Tab.Screen name="AddDesign" component={AddDesignScreen} /> */}

      {/* <Tab.Screen name="Categories" component={SettingStack} /> */}
      {/* <Tab.Screen name="Favorite" component={favorite} />
  <Tab.Screen name="Home" component={base} /> */}

      {/* <Tab.Screen
    options={{
      tabBarItemStyle: { display: "none" },
    }}
    name="EditProfile"
    component={EditProfile}
  /> */}
      {/* <Tab.Screen name="Profile" component={interests} /> */}
    </Tab.Navigator>
    // <Stack.Navigator
    //   screenOptions={{headerShown: false}}
    //   initialRouteName={'Meditation'}>
    //   <Stack.Screen name="Chat" component={ChatScreen} />
    //   <Stack.Screen name="AudioCall" component={AudioCallScreen} />
    //   <Stack.Screen name="VideoCall" component={VideoCallScreen} />
    //   <Stack.Screen name="Messaging" component={PeopleScreen} />
    //   <Stack.Screen name="Schedule" component={ScheduleScreen} />
    //   <Stack.Screen name="Meditation" component={MeditationScreen} />

    //   <Stack.Screen name="ActivitiesScreen" component={Activities} />
    //   <Stack.Screen name="MemberShipMenu" component={MemberShipMenu} />

    //   <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    //   <Stack.Screen
    //     name="ProfileSettingScreen"
    //     component={ProfileSettingScreen}
    //   />
    //   <Stack.Screen name="AccountSetting" component={AccountSetting} />
    //   <Stack.Screen
    //     name="NotificationSettingScreen"
    //     component={NotificationSettingScreen}
    //   />
    //   <Stack.Screen name="DocumentationList" component={DocumentationList} />
    //   <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
    //   <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
    //   <Stack.Screen name="Disclaimer" component={Disclaimer} />
    //   <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
    //   <Stack.Screen name="SummaryScreen" component={SummaryScreen} />
    // </Stack.Navigator>
  );
};

{
  /* <Stack.Screen name="Signout" component={SignOutScreen} /> */
}

export default MainStack;
