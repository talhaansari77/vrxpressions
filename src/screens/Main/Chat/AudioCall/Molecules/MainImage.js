import {View, Text, Image} from 'react-native';
import React from 'react';
import CustomText from '../../../../../components/CustomText';
import {colors} from '../../../../../utils/Colors';
import {Poppins} from '../../../../../utils/Fonts';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import {images} from '../../../../../assets/images';
import commonStyles from '../../../../../utils/CommonStyles';
import {Spacer} from '../../../../../components/Spacer';

const MainImage = () => {
  return (
    <View>
      <View style={styles.mainImage}>
        <Image
          resizeMode="contain"
          style={commonStyles.img}
          source={images.audioman}
        />
      </View>

      <CustomText
        fontFamily={Poppins.bold}
        color={colors.secondary}
        fontSize={25}
        alignSelf="center"
        numberOfLines={1}
        label={'Dr. Brian A. Raghav'}
      />
      <Spacer height={15} />
      <CustomText
        fontFamily={Poppins.regular}
        color={colors.secondary}
        fontSize={13}
        fontWeight="700"
        alignSelf="center"
        numberOfLines={1}
        label={'Calling...'}
      />
    </View>
  );
};

export default MainImage;

const styles = ScaledSheet.create({
  mainImage: {
    width: '100%',
    height: verticalScale(350),
    borderRadius: 99,
  },
});
