import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomTitle from '../../../../components/CustomTitle';
import {Spacer} from '../../../../components/Spacer';
import {images} from '../../../../assets/images';
import CustomText from '../../../../components/CustomText';
import { colors } from '../../../../utils/Colors';
import { verticalScale } from 'react-native-size-matters';

const MusicListScreen = ({navigation}) => {
  const musicList = [
    {
      id: 1,
      image: images.music2,
      musicname: 'Rain On Glass',
      musicBy: 'By: Painting with Passion',
      icons: images.purplePlay,
      onPress: ()=>{navigation.navigate("MusicPlayerScreen")}
    },
    {
      id: 1,
      image: images.music2,
      musicname: 'Rain On Glass',
      musicBy: 'By: Painting with Passion',
      icons: images.purplePlay,
      onPress: ()=>{navigation.navigate("MusicPlayerScreen")}
    },
    {
      id: 1,
      image: images.music2,
      musicname: 'Rain On Glass',
      musicBy: 'By: Painting with Passion',
      icons: images.purplePlay,
      onPress: ()=>{navigation.navigate("MusicPlayerScreen")}
    },
    {
      id: 1,
      image: images.music2,
      musicname: 'Rain On Glass',
      musicBy: 'By: Painting with Passion',
      icons: images.purplePlay,
      onPress: ()=>{navigation.navigate("MusicPlayerScreen")}
    },
    {
      id: 1,
      image: images.music2,
      musicname: 'Rain On Glass',
      musicBy: 'By: Painting with Passion',
      icons: images.purplePlay,
      onPress: ()=>{navigation.navigate("MusicPlayerScreen")}
    },
    {
        id: 1,
        image: images.music2,
        musicname: 'Rain On Glass',
        musicBy: 'By: Painting with Passion',
        icons: images.purplePlay,
        onPress: ()=>{navigation.navigate("MusicPlayerScreen")}
      },
  ];

  return (
    <ScrollView>
      <Spacer height={Platform.OS === 'ios' ? 40 : 5} />
      <Spacer height={20} />

      <CustomTitle title={'Music'} />
      <Spacer height={20} />
      <ScrollView>
      <View>
        {musicList.map((music, index) => (
            <TouchableOpacity activeOpacity={0.6} onPress={music.onPress} >
          <View
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom:verticalScale(20)
            //   justifyContent: 'space-evenly',
            }}>
            <View style={{flex:3}} >
              <Image
                source={music.image}
                resizeMode={'contain'}
                style={{
                  width: 80,
                  height: 80,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                //   backgroundColor: colors.red,
                }}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'flex-start',
                // backgroundColor: colors.red,
                marginBottom:2,
                flex:5.5
                // alignSelf:"center"
              }}>
              <CustomText label={music.musicname} fontFamily={"Poppins-Bold"} fontSize={18} />
              <CustomText label={music.musicBy} fontSize={12} />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: colors.red,
                marginBottom:2,
                flex:2.5,
              }}>
              <Image
                source={music.icons}
                resizeMode={'contain'}
                style={{
                  width: 13,
                  height: 24,
                }}
              />
            </View>
          </View>
          </TouchableOpacity>
        ))}
      </View>
        </ScrollView>
    </ScrollView>
  );
};

export default MusicListScreen;
