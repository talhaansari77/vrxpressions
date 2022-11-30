import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/Colors';
import CustomText from '../../../components/CustomText';
import {Spacer} from '../../../components/Spacer';
import {images} from '../../../assets/images';
import {scale, verticalScale} from 'react-native-size-matters';
import CustomButton from '../../../components/CustomButton';

const ProfileScreen = () => {
  const infoHead = [
    {
      id: 1,
      heading: 'Email',
    },
    {
      id: 2,
      heading: 'Phone',
    },
    {
      id: 3,
      heading: 'Address',
    },
    {
      id: 4,
      heading: 'Profession',
    },
    {
      id: 5,
      heading: 'Gender',
    },
    {
      id: 6,
      heading: 'Age',
    },
    {
      id: 7,
      heading: 'Height',
    },
    {
      id: 8,
      heading: 'Width',
    },
  ];

  const infoBody = [
    {
      id: 1,
      infoName: 'xyz@gmail.com',
    },
    {
      id: 2,
      infoName: '+1 (123)123 1234',
    },
    {
      id: 3,
      infoName: 'Street 2, 5th Avenue, New York City',
    },
    {
      id: 4,
      infoName: 'Fashion Designer',
    },
    {
      id: 5,
      infoName: 'Female',
    },
    {
      id: 6,
      infoName: '24',
    },
    {
      id: 7,
      infoName: '57',
    },
    {
      id: 8,
      infoName: '60',
    },
  ];

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: colors.primary,
          width: '100%',
          paddingHorizontal: 10,
        }}>
        <Spacer height={30} />
        <CustomText
          label={'profile'}
          fontSize={30}
          fontFamily={'Poppins-bold'}
          color={colors.secondary}
        />
        <Spacer height={30} />

        <Image
          source={images.ProfilePicture}
          resizeMode={'contain'}
          style={{
            height: verticalScale(180),
            width: scale(220),
            alignSelf: 'center',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 3},
            shadowOpacity: 0.4,
            shadowRadius: 5,
            backgroundColor: '#000',
            paddingBottom: 50,
          }}
        />

        <CustomButton
          title={'Edit'}
          height={25}
          width={50}
          backgroundColor={colors.secondary}
          fontSize={8}
          shadowOpacity={0.1}
          color={colors.black}
          borderRadius={40}
          top={-100}
          left={360}
        />

        <Spacer height={50} />

        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View>
            {infoHead.map((headName, index) => (
              <View key={index} style={{paddingRight: 15, marginTop: 2}}>
                <CustomText
                  fontFamily={'Poppins-bold'}
                  fontSize={12}
                  label={headName.heading}
                />
                <Spacer height={7} />
              </View>
            ))}
          </View>
          <View>
            {infoBody.map((boduName, index) => (
              <View key={index}>
                <CustomText fontSize={12} label={boduName.infoName} />
                <View
                  style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: colors.lightBlack,
                  }}
                />
                <Spacer height={8} />
              </View>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
