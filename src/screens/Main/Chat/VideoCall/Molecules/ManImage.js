import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Platform,
} from 'react-native';
import React from 'react';
import {BackgroundImage} from 'react-native-elements/dist/config';
import commonStyles from '../../../../../utils/CommonStyles';
import {images} from '../../../../../assets/images';
import {verticalScale} from 'react-native-size-matters';
import CallContainer from '../../AudioCall/Molecules/CallContainer';
import {icons} from '../../../../../assets/icons';
import {colors} from '../../../../../utils/Colors';
import PercentageSpacer from '../../../../../components/PercentageSpacer';

const ManImage = () => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={images.manImg} style={commonStyles.img}>
        <PercentageSpacer height={Platform.OS == 'ios' ? '5%' : 0} />

        <View style={styles.imgContainer}>
          <Image source={images.womenImg} style={commonStyles.img} />
        </View>
        <PercentageSpacer height={"43%"}/>
        <CallContainer
          color={colors.white}
          cancel
          imgVideo={icons.videocall}
          audioColor={colors.white}
          imgCallColor={colors.white}
        />
      </ImageBackground>
    </View>
  );
};

export default ManImage;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
  },
  imgContainer: {
    width: 200,
    height: 200,
    borderRadius: 99,
    alignSelf: 'flex-end',
    marginRight: verticalScale(10),
  },
});
