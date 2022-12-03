import {
  View,
  Text,
  ScrollView,
  FlatList,
  Platform,
  Modal,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import commonStyles, {PH10, PH20} from '../../../utils/CommonStyles';
import {Spacer} from '../../../components/Spacer';
import {scale, verticalScale} from 'react-native-size-matters';
import CustomText from '../../../components/CustomText';
import {Poppins} from '../../../utils/Fonts';
import {colors} from '../../../utils/Colors';
// import Card from './Molecules/Card';
import PrimaryCard from '../../Auth/Interests/Molecules/PrimaryCard';
import {images} from '../../../assets/images';
import CustomButton from '../../../components/CustomButton';
import TopBar from './Molecules/TopBar';
import { useNavigation } from '@react-navigation/native';

const Activities = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('Intermediate');
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;

  const ModalContent = () => (

    <View
      style={{position: 'absolute', bottom: 0, height: '62.5%', width: '100%'}}>
      <Image
        source={images.curve}
        style={{
          width: '110%',
          height: '87%',
          position: 'absolute',
          bottom: 0,
          zIndex: 10,
        }}
        // resizeMode={'contain'}
      />
      {/* <View
        style={{
          width: '100%',
          backgroundColor: colors.red,
          height: 200,
          position: 'absolute',
          bottom: 0,
          zIndex: 100,
        }}
      /> */}
      <View
        style={{
          // backgroundColor: colors.red,
          height: screenHeight / 2.4,
          width: screenWidth,
          position: 'absolute',
          bottom: 0,
          zIndex: 100,
        }}>
        <Spacer height={10} />
        <CustomText
          fontFamily={Poppins.bold}
          color={colors.black}
          fontSize={14}
          alignSelf="center"
          label={'Dumb-bell Stretches'}
        />
        <Spacer height={20} />
        <TopBar activeTab={activeTab} setActiveTab={setActiveTab} />
        <Spacer height={20} />
        <PH10>
          <CustomText
            fontFamily={Poppins.regular}
            color={colors.black}
            fontSize={12}
            textAlign="center"
            alignSelf="center"
            label={
              'Running refers to terrestrial locomotion allowing humans and other animals to move rapidly on foot. '
            }
          />
        </PH10>
        <Spacer height={30} />
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <CustomButton
            title={'14 km/h'}
            backgroundColor={colors.secondary}
            height={screenHeight / 18}
            width={screenWidth / 2.5}
            borderRadius={10}
          />
          <Spacer width={10} />
          <CustomButton
            title={'Schedule'}
            backgroundColor={colors.secondary}
            height={screenHeight / 18}
            onPress={()=>{
              setVisible(false)

              navigation.navigate("ScheduleScreen")

            }}
            
            width={screenWidth / 2.5}
            borderRadius={12}
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: colors.white,
          height: screenHeight / 6,
          width: screenHeight / 6,
          borderRadius: screenHeight,
          alignSelf: 'center',
          shadowColor: colors.black,
          shadowOffset: {width: 0, height: 1},
          shadowOpacity: 0.2,
          shadowRadius: 5,
          elevation: 4,
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 99,
          // position: 'absolute',
          // bottom: 0,
        }}>
        <View
          style={{
            backgroundColor: colors.white,
            height: screenHeight / 8.5,
            width: screenHeight / 8.5,
            borderRadius: screenHeight,
            alignSelf: 'center',
            shadowColor: colors.black,
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.2,
            shadowRadius: 70,
            elevation: 4,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 100,
          }}>
          <Image
            source={images.exercise}
            style={{height: 50, width: 50}}
            // resizeMode={'contain'}
          />
        </View>
      </View>
    </View>
  );

  const topActivitiesList = [
    {
      id: 1,
      btnLabel: 'Relieve Stress',
      image: images.musicListen,
    },
    {
      id: 2,
      btnLabel: 'Improve Focus',
      image: images.smallHappinessStanding,
    },
    {
      id: 3,
      btnLabel: 'Better Sleep',
      image: images.Sleep,
    },
  ];
  const activitiesList = [
    {
      id: 1,
      btnLabel: 'Exercise',
      image: images.exercise,
    },
    {
      id: 2,
      btnLabel: 'Exercise',
      image: images.ArmHold,
    },
    {
      id: 3,
      btnLabel: 'Exercise',
      image: images.balance,
    },
    {
      id: 4,
      btnLabel: 'ReExercise',
      image: images.Yoga,
    },
    {
      id: 5,
      btnLabel: 'Exercise',
      image: images.Stretch,
    },
    {
      id: 6,
      btnLabel: 'Meditate',
      image: images.meditation1,
    },
    {
      id: 7,
      btnLabel: 'Food',
      image: images.smallHappiness,
    },
    {
      id: 8,
      btnLabel: 'Music',
      image: images.musicListen,
    },
  ];
  return (
    <View style={{flex: 1}}>
      <Spacer height={Platform.OS === 'ios' ? 40 : 5} />
      <Spacer height={20} />
      <View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{height: verticalScale(200)}}
          >
          {topActivitiesList.map(item => (
            <>
              <Spacer width={20} />
              <View
                style={{
                  height: verticalScale(140),
                  width: scale(130),
                  // paddingVertical: 20,
                }}>
                {/* <Card fontSize={10} badge={3} /> */}
                <PrimaryCard
                  fontSize={10}
                  badge={3}
                  image={item.image}
                  btnLabel={item.btnLabel}
                />
              </View>
            </>
          ))}
          <Spacer width={20} />
        </ScrollView>
      </View>
      <PH20>
        <CustomText
          fontFamily={Poppins.bold}
          color={colors.black}
          fontSize={14}
          label={'Activities'}
        />
      </PH20>
      <Spacer height={20} />

      <FlatList
        data={activitiesList}
        numColumns={2}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: 'space-evenly',
          marginBottom: verticalScale(50),
        }}
        renderItem={({item}) => (
          <View style={{height: verticalScale(140), width: scale(130)}}>
            {/* <Card fontSize={10} badge={3} /> */}
            <PrimaryCard
              fontSize={10}
              badge={3}
              image={item.image}
              btnLabel={item.btnLabel}
              setVisible={setVisible}
              imageWidth={'70%'}
              imageHeight={'70%'}
            />
          </View>
        )}
        keyExtractor={item => item.id}
      />

      <Modal
        animationType="slide"
        visible={visible}
        onRequestClose={() => setVisible(false)}
        transparent={true}>
        <ModalContent />
      </Modal>
    </View>
  );
};

export default Activities;
