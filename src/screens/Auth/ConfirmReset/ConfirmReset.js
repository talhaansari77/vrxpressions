import {StyleSheet, Image, ScrollView, TextInput, Text} from 'react-native';
import React from 'react';
import commonStyles, {PH10, PH20} from '../../../utils/CommonStyles';
import {images} from '../../../assets/images';
import {scale, verticalScale} from 'react-native-size-matters';
import {Spacer} from '../../../components/Spacer';
import {Poppins} from '../../../utils/Fonts';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import CustomButton from '../../../components/CustomButton';
import SocialButton from '../Login/Molecules/SocialButton';
import InputField from '../Login/Molecules/InputField';
import Link from '../Login/Molecules/Link';
import PercentageSpacer from '../../../components/PercentageSpacer';

const ConfirmReset = ({navigation}) => {
  return (
    <ScrollView style={commonStyles.IosPadding}>
      {/* <PH10> */}

      <Image
        source={images.appIcon}
        style={{width: '100%', height: verticalScale(150)}}
        resizeMode={'contain'}
      />

      <CustomText
        fontFamily={Poppins.bold}
        color={colors.secondary}
        fontSize={40}
        label={'Reset'}
      />
      <CustomText
        fontFamily={Poppins.bold}
        color={colors.secondary}
        fontSize={40}
        label={'Password'}
      />
      <Spacer height={50} />
      <PH20>
        <Text style={{fontSize: 17}}>Please create a new password</Text>
        <Spacer height={10} />
        <TextInput
          placeholder="Password"
          placeholderTextColor={colors.darkGray}
          style={{
            color: colors.black,
            fontSize: verticalScale(14),
            paddingVertical: verticalScale(10),
            fontFamily: Poppins.regular,
            borderBottomWidth: 1,
          }}
        />
        <Spacer height={20} />
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor={colors.darkGray}
          style={{
            color: colors.black,
            fontSize: verticalScale(14),
            paddingVertical: verticalScale(10),
            fontFamily: Poppins.regular,
            borderBottomWidth: 1,
          }}
        />
      </PH20>

      <Spacer height={20} />
      <CustomButton
        title={'Send'}
        fontFamily={Poppins.bold}
        backgroundColor={colors.secondary}
        width={'50%'}
        height={verticalScale(35)}
        alignSelf={'center'}
        onPress={()=>{
          navigation.navigate("MainStack")

        }}
      />

      {/* </PH10> */}
    </ScrollView>
  );
};

export default ConfirmReset;

const styles = StyleSheet.create({});
