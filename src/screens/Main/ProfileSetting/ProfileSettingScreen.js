import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import SettingScreenHeader from './Molecules/SettingScreenHeader';
import {colors} from '../../../utils/Colors';
import SettingScreenBody from './Molecules/SettingScreenBody';

const ProfileSettingScreen = () => {
  return (
    <View
      style={{
        backgroundColor: colors.primary,
        flex: 1,
      }}>
      <SafeAreaView>
        <SettingScreenHeader />
        <SettingScreenBody />
      </SafeAreaView>
    </View>
  );
};

export default ProfileSettingScreen;
