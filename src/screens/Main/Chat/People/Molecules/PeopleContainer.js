import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import commonStyles from '../../../../../utils/CommonStyles';
import {images} from '../../../../../assets/images';
import {colors} from '../../../../../utils/Colors';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import CustomText from '../../../../../components/CustomText';
import {Poppins} from '../../../../../utils/Fonts';

const PeopleContainer = ({item,onPress}) => {
  return (
    <TouchableOpacity
    activeOpacity={0.6} 
    onPress={onPress}
    style={styles.mainContainer}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.imgContainer}>
          <Image style={commonStyles.img} source={item.img} />
        </View>
        <View style={{width: '65%', marginHorizontal: scale(15)}}>
          <CustomText
            fontFamily={Poppins.bold}
            color={colors.black}
            fontSize={14}
            label={item.name}
          />
          <CustomText
            fontFamily={Poppins.regular}
            color={colors.black}
            numberOfLines={1}
            fontSize={9}
            label={item.message}
          />
        </View>

        <CustomText
          fontFamily={Poppins.light}
          color={colors.black}
          fontSize={8}
          label={item.time}
        />
      </View>
    </TouchableOpacity>
  );
};

export default PeopleContainer;

const styles = ScaledSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    width: '100%',
    // padding:scale(10)
    paddingVertical: verticalScale(15),
    paddingHorizontal: scale(10),
  },
  imgContainer: {
    width: 50,
    height: 50,
    borderRadius: 99,
  },
});
