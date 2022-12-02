import {
  View,
  FlatList,
  ScrollView,
  Platform,
} from 'react-native';
import React from 'react';
import CustomTitle from '../../../components/CustomTitle';
import {Spacer} from '../../../components/Spacer';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';

const NotificationScreen = () => {
  const notificationArray = [
    {
      id: 1,
      title: 'Lorem ipsum',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit adipiscing amet in aenean scelerisque maecenas integer.',
      date: '04:05 pm',
    },
    {
      id: 1,
      title: 'Lorem ipsum',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit adipiscing amet in aenean scelerisque maecenas integer.',
      date: '04:05 pm',
    },
    {
      id: 1,
      title: 'Lorem ipsum',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit adipiscing amet in aenean scelerisque maecenas integer.',
      date: '04:05 pm',
    },
    {
      id: 1,
      title: 'Lorem ipsum',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit adipiscing amet in aenean scelerisque maecenas integer.',
      date: '04:05 pm',
    },
    {
      id: 1,
      title: 'Lorem ipsum',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit adipiscing amet in aenean scelerisque maecenas integer.',
      date: '04:05 pm',
    },
    {
      id: 1,
      title: 'Lorem ipsum11',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit adipiscing amet in aenean scelerisque maecenas integer.',
      date: '04:05 pm',
    },
    {
      id: 1,
      title: 'Lorem ipsum11',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit adipiscing amet in aenean scelerisque maecenas integer.',
      date: '04:05 pm',
    },
    {
      id: 1,
      title: 'Lorem ipsum11',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit adipiscing amet in aenean scelerisque maecenas integer.',
      date: '04:05 pm',
    },
    {
      id: 1,
      title: 'Lorem ipsum11',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit adipiscing amet in aenean scelerisque maecenas integer.',
      date: '04:05 pm',
    },
    {
      id: 1,
      title: 'Lorem ipsum11',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit adipiscing amet in aenean scelerisque maecenas integer.',
      date: '04:05 pm',
    },
    {
      id: 1,
      title: 'Lorem ipsum11',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit adipiscing amet in aenean scelerisque maecenas integer.',
      date: '04:05 pm',
    },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* <SafeAreaView> */}
      <Spacer height={Platform.OS === 'ios' ? 40 : 5} />
      <Spacer height={20} />

      <CustomTitle title={'Notification'} />
      <Spacer height={30} />
      {/* <ScrollView> */}
      <FlatList
        data={notificationArray}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          console.log(item.title);
          return (
            <View style={{width: '100%', paddingHorizontal: 25}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <CustomText
                  label={item.title}
                  fontSize={12}
                  fontFamily={'Poppins-Bold'}
                />
                <CustomText fontSize={6} label={item.date} />
              </View>
              <Spacer height={2} />
              <CustomText fontSize={6} label={item.detail} />
              <Spacer height={2} />

              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: colors.black,
                  marginTop: 5,
                }}
              />
              <Spacer height={10} />
            </View>
          );
        }}
      />
     
    </ScrollView>
  );
};

export default NotificationScreen;
