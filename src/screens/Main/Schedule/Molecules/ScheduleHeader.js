import {StyleSheet, Text, View, } from 'react-native';
import React, {useState} from 'react';
import {scale} from 'react-native-size-matters';
import CustomText from '../../../../components/CustomText';
import {colors} from '../../../../utils/Colors';
import {Poppins} from '../../../../utils/Fonts';
import {Spacer} from '../../../../components/Spacer';

const ScheduleHeader = () => {

  return (
    <View style={{padding: scale(5), width: '80%'}}>
      <Spacer height={20} />
      <CustomText
        fontFamily={Poppins.bold}
        color={colors.secondary}
        fontSize={25}
        label={'Schedule'}
        marginLeft={10}
      />
      <Spacer height={30} />

      <CustomText
        fontFamily={Poppins.light}
        color={colors.black}
        fontSize={12}
        label={
          'Any time you can choose but We recommend first thing in th morning.'
        }
        marginLeft={10}
      />

    </View>
  );
};

export default ScheduleHeader;

const styles = StyleSheet.create({});
