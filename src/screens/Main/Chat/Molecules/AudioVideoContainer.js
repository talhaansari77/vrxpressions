import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {images} from '../../../../assets/images';
import commonStyles from '../../../../utils/CommonStyles';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../../../utils/Colors';
import CustomText from '../../../../components/CustomText';
import {Roboto, Poppins} from '../../../../utils/Fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {icons} from '../../../../assets/icons';
const AudioVideoContainer = ({...props}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.imgContainer}>
          <Image source={images.man} style={commonStyles.img} />

          <View style={styles.whiteDot}>
            <View style={styles.primaryDot}></View>
          </View>
        </View>
        <View style={styles.centerContainer}>
          <CustomText
            fontFamily={Poppins.bold}
            color={colors.black}
            fontSize={14}
            label={'Dr. Brian A. Raghav'}
          />
          <CustomText
            fontFamily={Poppins.regular}
            color={colors.secondary}
            fontSize={13}
            label={'Psychologist'}
          />
        </View>
      </View>

      <TouchableOpacity
            activeOpacity={0.6}

        onPress={props.onAudioCall}
        style={styles.callContainer}>
        <Ionicons
          name="ios-call"
          color={colors.white}
          size={moderateScale(20)}
        />
      </TouchableOpacity>
      <TouchableOpacity
      activeOpacity={0.6}
        onPress={props.onVideoCall}
        style={[styles.callContainer, {marginHorizontal: 10}]}>
        <Image
          source={icons.videocall}
          resizeMode="contain"
          style={{width: 20, height: 20}}
        />
      </TouchableOpacity>
    </View>
  );
};
export default AudioVideoContainer;

const styles = ScaledSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: colors.white,
    // padding:"10@s"
    paddingVertical: '10@vs',
    // paddingHorizontal:"15@vs"
    paddingLeft: '15@vs',
    paddingRight: '5@s',
  },
  imgContainer: {
    width: 60,
    height: 60,
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteDot: {
    width: 12,
    height: 12,
    backgroundColor: colors.white,
    borderRadius: 99,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryDot: {
    width: 7,
    height: 7,
    backgroundColor: colors.secondary,
    borderRadius: 99,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  centerContainer: {
    marginHorizontal: '15@s',
    justifyContent: 'center',
  },
  callContainer: {
    backgroundColor: colors.secondary,
    padding: '9@s',
    borderRadius: '10@s',
    width: '38@s',
    height: '35@vs',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
