import {View, Text, Image} from 'react-native';
import React from 'react';
import CustomTitle from '../../../../components/CustomTitle';
import {images} from '../../../../assets/images';
import CustomText from '../../../../components/CustomText';
import { Spacer } from '../../../../components/Spacer';
import { colors } from '../../../../utils/Colors';

const MusicHeader = () => {
  return (
    <View>
      <CustomTitle title={'Music'} />
    <Spacer height={20} />
      <Image
        source={images.musicImage}
        resizeMode={'contain'}
        style={{
          width: '100%',
          height: 500,
          justifyContent: 'center',
          alignSelf: 'center',
        //   backgroundColor:"red"55555
        }}
      />
    <Spacer height={15} />
      <View style={{alignSelf:"center"}} >
      <CustomText label={"Rain on Glass"} fontFamily={"poppins-Bold"} fontSize={27} alignSelf={"center"} />
      <CustomText label={"By: Painting with Passion"} alignSelf={"center"} fontSize={12} color={colors.black1} />
      </View>
    </View>
  );
};

export default MusicHeader;
