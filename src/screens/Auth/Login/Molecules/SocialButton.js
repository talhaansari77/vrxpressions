import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import CustomText from '../../../../components/CustomText';
import { Poppins } from '../../../../utils/Fonts';
import { colors } from '../../../../utils/Colors';
import { Spacer } from '../../../../components/Spacer';
import {moderateScale} from 'react-native-size-matters';

const SocialButton = ({label, icon}) => (
    <TouchableOpacity
      activeOpacity={0.6}
      style={{
        backgroundColor: colors.secondary,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(50),
        alignSelf: 'center',
        padding: moderateScale(10),
      }}>
      <View style={{flex: 3, flexDirection: 'row'}}>
        <Spacer width={12} />
        <Image
          source={icon}
          style={{width: 30, height: 30}}
          resizeMode={'contain'}
        />
      </View>
      <View style={{flex: 7}}>
        <CustomText
          fontFamily={Poppins.regular}
          color={colors.white}
          fontSize={12}
          label={label}
        />
      </View>
    </TouchableOpacity>
  );

export default SocialButton