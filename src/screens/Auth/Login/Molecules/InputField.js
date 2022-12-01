import {  TextInput } from 'react-native'
import React from 'react'
import { colors } from '../../../../utils/Colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import { Poppins } from '../../../../utils/Fonts';

const InputField = ({placeholder}) => (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={colors.darkGray}
      style={{
        backgroundColor: colors.secondary,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(50),
        alignSelf: 'center',
        paddingVertical: verticalScale(10),
        paddingHorizontal: scale(20),
        fontSize:verticalScale(13),
        fontFamily:Poppins.regular
      }}
    />
  );

export default InputField