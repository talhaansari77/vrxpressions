import {
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  Text,
  View,
} from 'react-native';
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

const GetStarted = ({navigation}) => {
  return (
    <>
      <View style={{...commonStyles.IosPadding, flex: 0}}>
        {/* <PH10> */}

        <CustomText
          fontFamily={Poppins.bold}
          color={colors.secondary}
          fontSize={30}
          label={'Good Evening'}
        />
        <CustomText
          fontFamily={Poppins.regular}
          color={colors.black}
          fontSize={25}
          label={'Lara Blake'}
          marginLeft={120}
        />
      </View>
      <Spacer height={60} />
      <Image
        source={images.getStarted}
        style={{width: '100%', height: verticalScale(300)}}
        resizeMode={'cover'}
      />
      <View style={commonStyles.IosPadding}>
        <Spacer height={20} />
        <CustomButton
          title={'Get Started'}
          fontFamily={Poppins.bold}
          backgroundColor={colors.secondary}
          width={'50%'}
          height={verticalScale(35)}
          alignSelf={'center'}
        />

        {/* </PH10> */}
      </View>
    </>
  );
};

export default GetStarted;

const styles = StyleSheet.create({});
