import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../../../utils/Colors';
import {moderateScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {images} from '../../../../assets/images';
import {Poppins} from '../../../../utils/Fonts';
import SelectorBadge from './SelectorBadge';
import CustomText from '../../../../components/CustomText';

const PrimaryCard = ({fontSize, badge, pHeight, pWidth}) => {
  const cardContainerStyle = {
    height: pHeight||"100%",
    width: pWidth||"100%",
    alignSelf: 'center',
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
};
  const CardImage = () => (
    <Image
      source={images.smallHappinessStanding}
      style={cardImageStyle}
      resizeMode={'contain'}
    />
  );
  const CardButton = () => (
    <TouchableOpacity activeOpacity={0.8} style={cardBtnStyle}>
      <SelectorBadge badge={badge} />
      <CustomText
        fontFamily={Poppins.bold}
        color={colors.white}
        fontSize={fontSize}
        label={'Improve Focus'}
      />
    </TouchableOpacity>
  );
  // Main Function
  return (
    <View
      style={cardContainerStyle}>
      <LinearGradient
        colors={['#8E97FD80', '#bfc5fc', '#FCDDEC80', '#FFFFFF']}
        style={cardStyle}>
        <CardImage />
      </LinearGradient>
      <CardButton />
    </View>
  );
};

export default PrimaryCard;


const cardStyle = {
  height: '100%',
  width: '100%',
  alignSelf: 'center',
  borderTopStartRadius: moderateScale(20),
  borderTopEndRadius: moderateScale(20),
  alignItems: 'center',
  justifyContent: 'center',
  // backgroundColor: colors.white,
};
const cardBtnStyle = {
  backgroundColor: colors.secondary,
  width: '100%',
  height: '30%',
  alignSelf: 'center',
  borderRadius: moderateScale(20),
  alignItems: 'center',
  justifyContent: 'center',
  top: '-10%',
  shadowColor: colors.black,
  shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.6,
  shadowRadius: 4,
  elevation: 5,
};
const cardImageStyle = {
  width: '100%',
  height: '70%',
  marginBottom: '10%',
};
