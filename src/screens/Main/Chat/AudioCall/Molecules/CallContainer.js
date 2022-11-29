import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import CustomText from '../../../../../components/CustomText';
import {colors} from '../../../../../utils/Colors';
import {Poppins} from '../../../../../utils/Fonts';
import {Spacer} from '../../../../../components/Spacer';
import PrecentageSpacer from '../../../../../components/PrecentageSpacer';
import CustomButton from '../../../../../components/CustomButton';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import {icons} from '../../../../../assets/icons';
import commonStyles from '../../../../../utils/CommonStyles';
import { images } from '../../../../../assets/images';

const CallContainer = ({...props}) => {
  return (
    <View>
      <Spacer height={30} />
      <CustomText
        fontFamily={Poppins.regular}
        color={props.color}
        fontSize={30}
        fontWeight="700"
        alignSelf="center"
        numberOfLines={1}
        label={'00:12'}
      />
      <Spacer height={20} />

      <View style={styles.btnContainer}>
          <View style={{
                width: scale(20),
                height: verticalScale(20),

          }}>
          <Image
          source={props.imgVideo}
          resizeMode="contain"
          style={[commonStyles.img,{
            tintColor: props.imgCallColor,

          }]}
        />
        {
            props.cancel?(
                <View
                style={{
                    width: scale(20),
                    height: verticalScale(20),
                    position:"absolute",
        
              }}>
                     <Image
                  source={icons.videocancel}
                  resizeMode="contain"
                  style={commonStyles.img
        
                  }
                />
        
        
                </View>

            ):<></>
        }
      

          </View>
      

        <CustomButton
          title="End Call"
          fontFamily={Poppins.bold}
          backgroundColor={colors.secondary}
          width={'45%'}
          height={verticalScale(35)}
          borderRadius={10}
          alignSelf={'center'}
        />
        <Image
          source={icons.voice}
          resizeMode="contain"
          style={{
            width: scale(20),
            height: verticalScale(20),
            tintColor: props.audioColor,
          }}
        />
      </View>
    </View>
  );
};

export default CallContainer;

const styles = ScaledSheet.create({
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: '30@s',
  },
  imgContainer: {},
});
