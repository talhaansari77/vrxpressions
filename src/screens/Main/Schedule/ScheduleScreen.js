import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScheduleHeader from './Molecules/ScheduleHeader';
import ScheduleBody from './Molecules/ScheduleBody';
import {PH10, PH5} from '../../../utils/CommonStyles';
import {Spacer} from '../../../components/Spacer';
import DayContainer from './Molecules/DayContainer';
import CustomButton from '../../../components/CustomButton';
import {verticalScale} from 'react-native-size-matters';
import {colors} from '../../../utils/Colors';

const dayData = ['SU', 'M', 'T', 'W', 'TH', 'F', 'S'];

const ScheduleScreen = () => {
  return (
    <SafeAreaView>
      <ScheduleHeader />
      <Spacer height={15} />

      <PH5>
        <ScheduleBody />
        <Spacer height={30} />

        <View style={{flexDirection: 'row'}}>
          {dayData.map((item, index) => {
            return <DayContainer item={item} index={index} />;
          })}
        </View>
        <Spacer height={20} />

        <CustomButton
          title="Schedule"
          width="50%"
          height={verticalScale(35)}
          backgroundColor={colors.secondary}
          alignSelf="center"
          fontSize={16}
          shadowOpacity={0.3}
        />
      </PH5>
    </SafeAreaView>
  );
};

export default ScheduleScreen;

const styles = StyleSheet.create({});
