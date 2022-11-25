import {StyleSheet, Text, View, Platform, Image} from 'react-native';
import React from 'react';
import {colors} from '../../../../utils/Colors';
import CustomText from '../../../../components/CustomText';
import {Montserrat} from '../../../../utils/Fonts';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Spacer} from '../../../../components/Spacer';
import {icons} from '../../../../assets/icons';


const AuthOption = () => {
  return (
    <View>
    
    </View>
  );
};

export default AuthOption;

const styles = StyleSheet.create({
  OrContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lineSeprator: {
    width: '40%',
    backgroundColor: colors.black,
    height: 1,
  },
  authContainer: {
    width: 55,
    height: 55,
    borderRadius: 99,
    shadowColor: Platform.OS == 'ios' ? '#ced4da' : colors.black,
    shadowRadius: 8,
    backgroundColor: colors.white,
    elevation: 5,
    alignItems: 'center',
    shadowOpacity: 0.5,
    justifyContent: 'center',

    shadowOffset: {width: 3, height: 5},
  },
});
