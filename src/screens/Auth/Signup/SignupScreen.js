import {StyleSheet, Image, ScrollView, View} from 'react-native';
import React from 'react';
import commonStyles from '../../../utils/CommonStyles';
import {images} from '../../../assets/images';
import { verticalScale} from 'react-native-size-matters';
import {Spacer} from '../../../components/Spacer';
import {Poppins} from '../../../utils/Fonts';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import CustomButton from '../../../components/CustomButton';
import SocialButton from '../Login/Molecules/SocialButton';
import InputField from '../Login/Molecules/InputField';
import Link from '../Login/Molecules/Link';
import PercentageSpacer from '../../../components/PercentageSpacer';

const SignupScreen = ({navigation}) => {
  
  return (
    // <ScrollView >
      <View style={{...commonStyles.IosPadding}}>

      {/* <PH10> */}

      <Image
        source={images.appIcon}
        style={{width: '100%', height:verticalScale(150)}}
        resizeMode={'contain'}
      />

      <CustomText
        fontFamily={Poppins.bold}
        color={colors.secondary}
        fontSize={40}
        label={'Sign Up'}
      />
      <Spacer height={20} />

      <SocialButton label={'Login With GOOGLE'} icon={images.googleIcon} />
      <Spacer height={20} />
      <SocialButton label={'Login With facebook'} icon={images.fbIcon} />
      <PercentageSpacer height={"8%"}/>
      <InputField placeholder={'Email'} />
      <Spacer height={20} />
      <InputField placeholder={'Password'} />
      <Spacer height={20} />
      <InputField placeholder={'Confirm Password'} />
     
      <Spacer height={20} />
      <CustomButton
        title={'Sign Up'}
        fontFamily={Poppins.bold}
        backgroundColor={colors.secondary}
        width={'50%'}
        onPress={()=>{
          navigation.navigate("OtpScreen")}}
        height={verticalScale(35)}
        alignSelf={'center'}
      />
      <Spacer height={5} />

      <Link txt1={'Don’t have an account?'} txt2={'Login'} onPress={()=>navigation.navigate('LoginScreen')}/>

      {/* </PH10> */}
      </View>

    // </ScrollView>

  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
