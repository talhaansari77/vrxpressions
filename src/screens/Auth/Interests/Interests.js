import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import commonStyles from '../../../utils/CommonStyles';
import {verticalScale} from 'react-native-size-matters';
import {Spacer} from '../../../components/Spacer';
import {Poppins} from '../../../utils/Fonts';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import CustomButton from '../../../components/CustomButton';
import PrimaryCard from './Molecules/PrimaryCard';

const Interests = ({navigation}) => {
  return (
    <>
      <View style={{...commonStyles.IosPadding, flex: 0}}>
        {/* <PH10> */}
        <Spacer height={20} />

        <CustomText
          fontFamily={Poppins.bold}
          color={colors.secondary}
          fontSize={30}
          label={'LARA BLAKE'}
        />
                <Spacer height={10} />

        <View style={{flexDirection: 'row'}}>
          <CustomText
            fontFamily={Poppins.regular}
            color={colors.black}
            fontSize={12}
            fontWeight="400"
            label={'What brings you to'}
          />
          <CustomText
            ontFamily={Poppins.regular}
            color={colors.black}
            fontSize={20}
            label="VR Xpression"
            marginLeft={3}
            marginTop={4}
          />
        </View>

       
      </View>
      <Spacer height={50} />

      
      <PrimaryCard fontSize={18} badge={1} pHeight={'45%'} pWidth={'85%'} />
      <Spacer height={100} />

      <CustomButton
        title={'Save'}
        fontFamily={Poppins.bold}
        backgroundColor={colors.secondary}
        width={'50%'}
        height={verticalScale(35)}
        onPress={() => {
          navigation.navigate('MainStack');
        }}
        alignSelf={'center'}
      />
    </>
  );
};

export default Interests;
