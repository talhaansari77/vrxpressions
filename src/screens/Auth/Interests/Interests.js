import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import commonStyles from '../../../utils/CommonStyles';
import {verticalScale} from 'react-native-size-matters';
import {Spacer} from '../../../components/Spacer';
import {Poppins} from '../../../utils/Fonts';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import CustomButton from '../../../components/CustomButton';
import PrimaryCard from './Molecules/PrimaryCard';
import Carousel from 'react-native-snap-carousel';
const Interests = ({navigation}) => {
  const _renderItem = ({item, index}) => {
    return (
      <PrimaryCard fontSize={18} badge={1} pHeight={'80%'} pWidth={'100%'} />
    );
  };
  return (
    <>
      <View style={{...commonStyles.IosPadding, flex: 0}}>
        {/* <PH10> */}
        <Spacer height={20} />

        <CustomText
          fontFamily={Poppins.bold}
          color={colors.secondary}
          fontSize={30}
          label={'LARA BLAKE'}
        />
        <Spacer height={10} />

        <View style={{flexDirection: 'row'}}>
          <CustomText
            fontFamily={Poppins.regular}
            color={colors.black}
            fontSize={12}
            fontWeight="400"
            label={'What brings you to'}
          />
          <CustomText
            ontFamily={Poppins.regular}
            color={colors.black}
            fontSize={20}
            label="VR Xpression"
            marginLeft={3}
            marginTop={4}
          />
        </View>
      </View>
      <Spacer height={30} />

      {/* <PrimaryCard fontSize={18} badge={1} pHeight={'45%'} pWidth={'85%'} /> */}
      <Carousel
        // ref={c => {
        //   _carousel = c;
        // }}
        data={[1, 2, 3]}
        renderItem={_renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width / 1.2}
        // sliderHeight={}
        sliderHeight={Dimensions.get('window').height / 3}
      />

      <Spacer height={20} />
      <CustomButton
        title={'Save'}
        fontFamily={Poppins.bold}
        backgroundColor={colors.secondary}
        width={'50%'}
        height={verticalScale(35)}
        onPress={() => {
          navigation.navigate('MainStack');
        }}
        alignSelf={'center'}
      />
      <Spacer height={50} />
    </>
  );
};

export default Interests;
