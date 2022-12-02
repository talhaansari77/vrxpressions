import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import CustomMenu from '../../../components/CustomMenu';
import { Spacer } from '../../../components/Spacer';
import CustomTitle from '../../../components/CustomTitle';

const NotificationSettingScreen = () => {
    const SettingArray = [
        {
          id: 1,
          name: 'Push notification',
          switch: ""
        },
        {
          id: 2,
          name: 'Email Notification',
          switch:""
        },
      ];
  return (
    <View>
      <SafeAreaView>
      <Spacer height={20} />

      <CustomTitle 
      fontSize={22}
      title={"Notification Setting"} />
    <Spacer height={40} />
      {SettingArray.map((settings, index) => (
        <View key={index}>
          <CustomMenu
              txt1={settings.name}
              toggle
            />
        </View>
      ))}
      </SafeAreaView>
    </View>
  );
};

export default NotificationSettingScreen;
