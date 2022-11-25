import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import commonStyles, {PH10} from '../../../utils/CommonStyles';
import {images} from '../../../assets/images';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Spacer} from '../../../components/Spacer';
import {Poppins} from '../../../utils/Fonts';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import {TextInput} from 'react-native-gesture-handler';
import CustomButton from '../../../components/CustomButton';
import SocialButton from './Molecules/SocialButton';
import InputField from './Molecules/InputField';
import Link from './Molecules/Link';

const LoginScreen = ({navigation}) => {
  return (
    <View style={commonStyles.IosPadding}>
      {/* <PH10> */}

      <Image
        source={images.appIcon}
        style={{width: '100%', height: 200}}
        resizeMode={'contain'}
      />

      <CustomText
        fontFamily={Poppins.bold}
        color={colors.secondary}
        fontSize={40}
        label={'Login'}
      />
      <Spacer height={70} />

      <SocialButton label={'Login With GOOGLE'} icon={images.googleIcon} />
      <Spacer height={20} />
      <SocialButton label={'Login With facebook'} icon={images.fbIcon} />
      <Spacer height={30} />
      <InputField placeholder={'Email'} />
      <Spacer height={20} />
      <InputField placeholder={'Password'} />
      <Spacer height={20} />
      <CustomText label={'Forgotten Password'} marginLeft={20} />
      <Spacer height={20} />
      <CustomButton
        title={'Login'}
        fontFamily={Poppins.bold}
        backgroundColor={colors.secondary}
        width={'50%'}
        height={verticalScale(35)}
        alignSelf={'center'}
      />
      <Spacer height={20} />

      <Link txt1={'Don’t have an account?'} txt2={'Sign Up'} onPress={()=>navigation.navigate('SignupScreen')} />

      {/* </PH10> */}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
