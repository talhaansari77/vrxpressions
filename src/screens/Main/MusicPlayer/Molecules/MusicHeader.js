import {View, Text, Image} from 'react-native';
import React from 'react';
import CustomTitle from '../../../../components/CustomTitle';
import {images} from '../../../../assets/images';
import CustomText from '../../../../components/CustomText';
import {Spacer} from '../../../../components/Spacer';
import {colors} from '../../../../utils/Colors';
import commonStyles from '../../../../utils/CommonStyles';
import { scale } from 'react-native-size-matters';

const MusicHeader = () => {
  return (
    <View>
      <Spacer height={20} />

      <CustomTitle title={'Music'} />
      <Spacer height={20} />
      <View
        style={{
          width: '95%',
          height: '65%',
          justifyContent: 'center',
          alignSelf: 'center',
          borderRadius:scale(10),
          overflow:"hidden",
          backgroundColor:"red"
          //   backgroundColor:"red"55555
        }}>
        <Image
          source={images.musicImage}
          // resizeMode={'contain'}
          style={commonStyles.img}
        />
      </View>

      <Spacer height={10} />
      <View style={{alignSelf: 'center'}}>
        <CustomText
          label={'Rain on Glass'}
          fontFamily={'poppins-Bold'}
          fontSize={27}
          alignSelf={'center'}
        />
        <CustomText
          label={'By: Painting with Passion'}
          alignSelf={'center'}
          fontSize={12}
          color={colors.black1}
        />
      </View>
    </View>
  );
};

export default MusicHeader;
