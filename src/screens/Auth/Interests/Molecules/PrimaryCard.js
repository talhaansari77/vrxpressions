import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../../utils/Colors';
import {moderateScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {images} from '../../../../assets/images';
import {Poppins} from '../../../../utils/Fonts';
import SelectorBadge from './SelectorBadge';
import CustomText from '../../../../components/CustomText';

const PrimaryCard = ({
  fontSize,
  badge,
  pHeight,
  pWidth,
  setVisible,
  btnLabel,
  image,
  imageWidth,
  imageHeight,
}) => {
  const [showBadge, setShowBadge] = useState(false);
  const cardContainerStyle = {
    height: pHeight || '100%',
    width: pWidth || '100%',
    alignSelf: 'center',
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  };
  const cardImageStyle = {
    width: imageWidth||'100%',
    height: imageHeight || '70%',
    marginBottom: '10%',
  };
  const CardImage = ({image}) => (
    <Image
      source={image || images.smallHappinessStanding}
      style={cardImageStyle}
      resizeMode={'contain'}
    />
  );
  const CardButton = ({setVisible, btnLabel, showBadge}) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        setVisible ? setVisible(true) : '';
        setShowBadge(true);
      }}
      style={cardBtnStyle}>
      {showBadge ? <SelectorBadge badge={badge} /> : <></>}

      <CustomText
        fontFamily={Poppins.bold}
        color={colors.white}
        fontSize={fontSize}
        label={btnLabel || 'Exercise'}
      />
    </TouchableOpacity>
  );
  // Main Function
  return (
    <View style={cardContainerStyle}>
      <LinearGradient
        colors={['#8E97FD80', '#bfc5fc', '#FCDDEC80', '#FFFFFF']}
        style={cardStyle}>
        <CardImage image={image} />
      </LinearGradient>
      <CardButton
        setVisible={setVisible}
        btnLabel={btnLabel}
        showBadge={showBadge}
      />
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
  shadowOffset: {width: 0, height: 5},
  shadowOpacity: 0.4,
  shadowRadius: 4,
  elevation: 5,
};

