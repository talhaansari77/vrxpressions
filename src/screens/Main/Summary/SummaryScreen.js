import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import commonStyles, {PH10, PH20} from '../../../utils/CommonStyles';
import CustomText from '../../../components/CustomText';
import {Poppins} from '../../../utils/Fonts';
import {colors} from '../../../utils/Colors';
import {Spacer} from '../../../components/Spacer';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Circle} from 'react-native-svg';
import {images} from '../../../assets/images';
import PrimaryCard from '../../Auth/Interests/Molecules/PrimaryCard';
import CustomButton from '../../../components/CustomButton';

const SummaryScreen = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const completedActivities = [
    {
      id: 1,
      label1: 'Workout',
      label2: '2 hours',
      icon: images.dumbbell,
      height: verticalScale(90),
      width: screenWidth / 1.9,
      iconBackColor: colors.white,
      backgroundColor: colors.secondary,
      space: true,
      topIcon: true,
    },
    {
      id: 2,
      label1: 'Meditate',
      label2: '2 hours',
      icon: images.meditation,
      height: verticalScale(90),
      width: screenWidth / 3.5,
      iconBackColor: colors.secondary,
      backgroundColor: colors.white,
      space: false,
      topIcon: true,
    },
    {
      id: 3,
      label1: 'Food',
      label2: '2 hours',
      icon: images.food,
      height: verticalScale(60),
      width: screenWidth / 2.2,
      iconBackColor: colors.secondary,
      backgroundColor: colors.white,
      space: true,
      topIcon: false,
      marginTop: verticalScale(15),
    },
  ];
  const unfinishedActivities = [
    {
      id: 1,
      label1: 'Music',
      label2: '2 hours',
      icon: images.music,
      height: verticalScale(60),
      width: screenWidth / 2.2,
      iconBackColor: colors.secondary,
      backgroundColor: colors.white,
      space: true,
      topIcon: false,
      marginTop: verticalScale(15),
    },
  ];
  const feelings = [
    {
      id: 1,
      label: 'Happy',
      label2: '2 hours',
      icon: images.happy,
      backgroundColor: colors.pinkish,
      height: verticalScale(45),
      width: scale(50),
    },
    {
      id: 2,
      label: 'Calm',
      label2: '2 hours',
      icon: images.calmIcon,
      backgroundColor: colors.purple,
      height: verticalScale(45),
      width: scale(50),
    },
    {
      id: 3,
      label: 'Manic',
      label2: '2 hours',
      icon: images.relax,
      backgroundColor: colors.lightGreen,
      height: verticalScale(45),
      width: scale(50),
    },
    {
      id: 4,
      label: 'Angry',
      label2: '2 hours',
      icon: images.angry,
      backgroundColor: colors.orange,
      height: verticalScale(45),
      width: scale(50),
    },
    {
      id: 5,
      label: 'Sad',
      label2: '2 hours',
      icon: images.angry,
      backgroundColor: colors.parrot,
      height: verticalScale(45),
      width: scale(50),
    },
  ];
  const cardsList = [
    {
      id: 1,
      label: 'Exercise',
      icon: images.exercise,
      backgroundColor: colors.secondary,
    },
    {
      id: 2,
      label: 'Meditation',
      icon: images.meditation1,
      backgroundColor: colors.orangeLight,
    },
    {
      id: 3,
      label: 'Running',
      icon: images.exercise,
      backgroundColor: colors.pinkish,
    },
  ];

  const ActivitiesTab = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        backgroundColor: item.backgroundColor,
        height: item.height,
        width: item.width,
        borderRadius: moderateScale(15),
        marginTop: item.marginTop,
        borderWidth: item.backgroundColor === colors.white,
        // alignItems:'center',
        justifyContent: item.id === 3 ? 'center' : 'space-evenly',
      }}>
      {item.topIcon ? (
        <CircleIcon color={item.iconBackColor} icon={item.icon} />
      ) : (
        <></>
      )}
      {!item.topIcon ? <></> : <Spacer height={15} />}
      <PH10>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <CustomText
              fontFamily={Poppins.bold}
              color={colors.black}
              fontSize={14}
              label={item.label1}
            />
            <Spacer height={2} />
            <CustomText
              fontFamily={Poppins.regular}
              color={colors.black}
              fontSize={14}
              label={item.label2}
            />
          </View>
          {!item.topIcon ? (
            <CircleIcon color={item.iconBackColor} icon={item.icon} topIcon />
          ) : (
            <></>
          )}
        </View>
      </PH10>
    </TouchableOpacity>
  );

  const CircleIcon = ({color, icon, topIcon}) => (
    <View
      style={{
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: color,
        top: !topIcon ? 12 : 0,
        left: !topIcon ? 12 : 0,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={icon}
        style={{width: verticalScale(20), height: scale(20)}}
        resizeMode={'contain'}
      />
    </View>
  );
  const FeelingsTab = ({item}) => (
    <TouchableOpacity activeOpacity={0.8} style={{width: 60}}>
      <View
        style={{
          height: item.height,
          width: item.width,
          borderRadius: moderateScale(10),
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={item.icon}
          style={{width: verticalScale(50), height: scale(30)}}
          resizeMode={'contain'}
        />
      </View>
      <Spacer height={5} />
      <CustomText label={item.label} alignSelf={'center'} />
    </TouchableOpacity>
  );
  const Card = ({item}) => (
    <View
      style={{
        height: screenHeight / 4,
        width: screenWidth / 2.25,
        borderRadius: moderateScale(10),
        backgroundColor: item.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 4,
      }}>
      <Image
        source={item.icon}
        style={{width: verticalScale(100), height: scale(100)}}
        resizeMode={'contain'}
      />
      <Spacer height={5} />
      <CustomText
        fontFamily={Poppins.bold}
        color={colors.white}
        fontSize={14}
        label={'Exercise'}
      />
      <Spacer height={5} />
      <CustomButton
        title={'Begin'}
        fontFamily={Poppins.bold}
        backgroundColor={colors.secondary}
        width={'70%'}
        height={verticalScale(30)}
        alignSelf={'center'}
        shadowColor={colors.white}
        shadowHeight={-5}
      />
    </View>
  );
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={commonStyles.IosPadding}>
      <Spacer height={20} />

        <CustomText
          fontFamily={Poppins.bold}
          color={colors.black}
          fontSize={14}
          label={'Summary'}
        />
        <Spacer height={20} />
        <PH10>
          <CustomText
            fontFamily={Poppins.bold}
            color={colors.black}
            fontSize={14}
            label={'Completed Activities'}
          />

          <Spacer height={15} />
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {completedActivities.map(item => (
              <>
                <ActivitiesTab item={item} />
                {item.space ? <Spacer width={10} /> : <></>}
              </>
            ))}
          </View>

          <Spacer height={20} />
          <CustomText
            fontFamily={Poppins.bold}
            color={colors.black}
            fontSize={14}
            label={'Unfinished Activities'}
          />
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {unfinishedActivities.map(item => (
              <>
                <ActivitiesTab item={item} />
                {item.space ? <Spacer width={10} /> : <></>}
              </>
            ))}
          </View>
        </PH10>

        <Spacer height={20} />

        <CustomText
          fontFamily={Poppins.regular}
          color={colors.black}
          fontSize={14}
          label={'How are you feeling today ?'}
        />
        <Spacer height={15} />

        <FlatList
          data={feelings}
          numColumns={5}
          columnWrapperStyle={{flex: 1, justifyContent: 'space-between'}}
          renderItem={({item}) => <FeelingsTab item={item} />}
          keyExtractor={item => item.id}
        />
        <Spacer height={20} />

        <FlatList
          data={cardsList}
          numColumns={2}
          columnWrapperStyle={{
            flex: 1,
            justifyContent: 'space-between',
            marginBottom: verticalScale(12),
          }}
          renderItem={({item}) => <Card item={item} />}
          keyExtractor={item => item.id}
        />

        <Spacer height={20} />
      </View>
    </ScrollView>
  );
};

export default SummaryScreen;
