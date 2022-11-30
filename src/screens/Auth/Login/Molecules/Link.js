import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomText from '../../../../components/CustomText';
import { Poppins } from '../../../../utils/Fonts';
import { colors } from '../../../../utils/Colors';

const Link = ({txt1, txt2, onPress}) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap:'wrap'
      }}>
      <CustomText label={txt1} 
      fontSize={12}
      />
      <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
        <CustomText
          label={txt2}
          fontFamily={Poppins.bold}
          color={colors.secondary}
          fontSize={16}
          marginLeft={10}
        />
      </TouchableOpacity>
    </View>
  );

export default Link