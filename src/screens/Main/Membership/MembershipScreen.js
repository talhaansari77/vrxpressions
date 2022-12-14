import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import CustomText from '../../../components/CustomText';
import {Poppins} from '../../../utils/Fonts';
import {colors} from '../../../utils/Colors';
import {Spacer} from '../../../components/Spacer';
import {PH10} from '../../../utils/CommonStyles';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {icons} from '../../../assets/icons';
import styled from 'react-native-styled-components';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import CustomButton from '../../../components/CustomButton';
import {FlatList} from 'react-native-gesture-handler';

const MembershipScreen = () => {
  const cards = [
    {
      id: 1,
      price: '',
      duration: '',
      btnLabel: 'Purchased',
      color1:"#3EC8FF",
      color2:"#8E97FD"
    },
    {
      id: 2,
      price: '$19.99',
      duration: '/month',
      btnLabel: 'Upgrade',
      color1:"#3EC8FF",
      color2:"#AEAFF7"
    },
    {
      id: 3,
      price: '$49.99',
      duration: '/6 months',
      btnLabel: 'Upgrade',
      color1:"#8E97FD",
      color2:"#9063EA"
    },
  ];
  const TextWithIcon = () => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: verticalScale(7),
      }}>
      <Spacer width={30} />
      <Image
        source={icons.Tick}
        style={{width: 18, height: 18}}
        resizeMode={'contain'}
      />
      <Spacer width={20} />
      <CustomText
        fontFamily={Poppins.regular}
        color={colors.white}
        fontSize={10}
        label={'Condimentum eleifend et nulla.'}
      />
    </View>
  );
  const MembershipCard = ({price, btnLabel, duration,color1,color2}) => (
    <LinearGradient
      start={{x: 1, y: 0}}
      end={{x: 0, y: 0}}
      style={{
        height: verticalScale(265),
        width: '90%',
        alignSelf: 'center',
        borderRadius: moderateScale(20),
      }}
      colors={[color1, color2]}>
      <Spacer height={20} />
      <Image
        source={icons.Crown}
        style={{width: '50%', height: 50, alignSelf: 'center'}}
        resizeMode={'contain'}
      />
      <Spacer height={10} />
      <Center>
        <View style={{flexDirection: 'row',alignItems:'center'}}>
          <CustomText
            fontFamily={Poppins.bold}
            color={colors.white}
            fontSize={22}
            label={price ? price : 'Free Trial'}
          />
          
          <CustomText label={"  "+duration} color={colors.white}/>
        </View>
      </Center>
      <Spacer height={10} />
      <Divider style={{marginHorizontal: 30}} width={1} color={colors.white} />
      <Spacer height={10} />
      <TextWithIcon />
      <TextWithIcon />
      <TextWithIcon />
      <Spacer height={10} />
      <Center>
        <CustomButton
          title={btnLabel}
          backgroundColor={'#8E97FD'}
          width={200}
          height={50}
        />
      </Center>
    </LinearGradient>
  );
  return (
    <ScrollView style={{flex: 1}}
    showsVerticalScrollIndicator={false}
    >
      <Spacer height={Platform.OS === 'ios' ? 40 : 5} />
      <PH10>
        <Spacer height={20}/>
        <CustomText
          fontFamily={Poppins.bold}
          color={colors.secondary}
          fontSize={20}
          label={'Membership'}
        />
      </PH10>
      {/* <Text>MembershipScreen</Text> */}
      {/* <View style={{}}></View> */}
      <Spacer height={20} />
      <FlatList
        data={cards}
        showsVerticalScrollIndicator={false}
        // numColumns={5}
        // columnWrapperStyle={{flex: 1, justifyContent: 'space-between'}}
        renderItem={({item}) => (
          <>
            <MembershipCard
              price={item.price}
              duration={item.duration}
              btnLabel={item.btnLabel}
              color1={item.color1}
              color2={item.color2}
            />
            <Spacer height={15} />
          </>
        )}
        keyExtractor={item => item.id}
      />
      {/* <MembershipCard/> */}
    </ScrollView>
  );
};

export default MembershipScreen;

const Center = styled(View, {
  alignSelf: 'center',
});
