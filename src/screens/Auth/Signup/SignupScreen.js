import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import commonStyles, {PH10} from '../../../utils/CommonStyles';
import {images} from '../../../assets/images';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Spacer} from '../../../components/Spacer';
import BodyItem from './Molecules/BodyItem';
import {Poppins} from '../../../utils/Fonts';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import {TextInput} from 'react-native-gesture-handler';
import CustomButton from '../../../components/CustomButton';
import SocialButton from '../Login/Molecules/SocialButton';
import InputField from '../Login/Molecules/InputField';
import Link from '../Login/Molecules/Link';
import PrecentageSpacer from '../../../components/PrecentageSpacer';

const SignupScreen = ({navigation}) => {
  
  return (
    <ScrollView style={commonStyles.IosPadding}>
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
      <PrecentageSpacer height={"8%"}/>
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
        height={verticalScale(35)}
        alignSelf={'center'}
      />
      <Spacer height={15} />

      <Link txt1={'Don’t have an account?'} txt2={'Login'} onPress={()=>navigation.navigate('LoginScreen')}/>

      {/* </PH10> */}
    </ScrollView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
