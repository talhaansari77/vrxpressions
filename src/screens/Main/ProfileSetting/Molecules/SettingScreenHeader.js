import {View, Text, Image} from 'react-native';
import React from 'react';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import {images} from '../../../../assets/images';
import CustomText from '../../../../components/CustomText';
import {colors} from '../../../../utils/Colors';
import {Spacer} from '../../../../components/Spacer';
import {icons} from '../../../../assets/icons';

const SettingScreenHeader = () => {
  return (
    <View>
      <Spacer height={20} />
      <View
        style={styles.mainConatiner}>
        <Spacer width={25} />
        <View style={styles.imgContainer}>
          <Image
            source={images.ProfilePicture}
            resizeMode={'contain'}
            style={{
              height: verticalScale(70),
              width: scale(80),
              // alignSelf: 'center',
            }}
          />
        </View>
        <Spacer width={25} />

        <View style={{justifyContent: 'center', flex: 2, marginTop: 20}}>
          <View>
            <CustomText
              label={'Lisa Jordon'}
              fontSize={18}
              fontFamily={'Poppins-bold'}
              color={colors.black}
            />
            <CustomText
              label={'View Profile'}
              fontSize={12}
              color={colors.secondary}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  imgContainer: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 5,

    // backgroundColor: '#000',
  },
  mainConatiner:{

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 4,
 
  }
});

export default SettingScreenHeader;
