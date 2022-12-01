import {
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  Text,
  View,
} from 'react-native';
import React from 'react';
import commonStyles, {PH10} from '../../../utils/CommonStyles';
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

const OtpScreen = ({navigation, route}) => {
  console.log('Params');
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
        label={route?.params ? 'Reset Password' : 'OTP'}
      />
      <Spacer height={route?.params ? '30' : '50'} />
      <PH10>
        <View style={{flexDirection: 'row', alignItems: 'center'}}></View>
        <Text
          style={{fontSize: verticalScale(13), fontFamily: Poppins.regular}}>
          Please enter the OTP sent to
          <Text
            style={{
              color: colors.secondary,
              fontWeight: 'bold',
              fontFamily: Poppins.regular,
            }}>
            {' '}
            “xyz@gmail.com”.
          </Text>
        </Text>
      </PH10>
      <Spacer height={10} />
      <TextInput
        textAlign="center"
        placeholder="01245"
        placeholderTextColor={colors.secondary}
        style={{
          // backgroundColor: 'red',
          height: verticalScale(100),
          paddingHorizontal: scale(15),
          paddingVertical: verticalScale(10),
          letterSpacing: 20,
          fontSize: verticalScale(55),
          borderBottomColor: colors.secondary,
          color: colors.secondary,
          borderBottomWidth: 3,
          width: '90%',
          alignSelf: 'center',
        }}
        maxLength={5}
        keyboardType={'number-pad'}
      />

      <Spacer height={20} />
      <CustomButton
        title={route?.params ? 'Confirm' : 'Sign Up'}
        fontFamily={Poppins.bold}
        backgroundColor={colors.secondary}
        width={'50%'}
        height={verticalScale(35)}
        alignSelf={'center'}
        onPress={() => {
          if (route?.params) {
            navigation.navigate('ConfirmReset');
          } else {
            navigation.navigate('GetStarted');
          }
        }}
      />
      <Spacer height={15} />
      <Link
        txt1={'Didn’t recieve OTP?'}
        txt2={'Resend'}
       
      />

      {/* </PH10> */}
    </ScrollView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({});
