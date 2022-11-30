import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomText from '../../../../components/CustomText';
import {Poppins} from '../../../../utils/Fonts';
import {colors} from '../../../../utils/Colors';
import commonStyles from '../../../../utils/CommonStyles';
import {Spacer} from '../../../../components/Spacer';
import PeopleContainer from './Molecules/PeopleContainer';
import {images} from '../../../../assets/images';
import { FlatList } from 'react-native-gesture-handler';

const PeopleScreen = ({navigation}) => {
  const peopleData = [
    {
      id: 1,
      name: 'Dr. Brian A. Raghav',
      message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
      time: '10:53 pm',
      img: images.man,
    },
    {
      id: 1,
      name: 'Dr. Brian A. Raghav',
      message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
      time: '10:53 pm',
      img: images.man,
    },
    {
      id: 1,
      name: 'Dr. Brian A. Raghav',
      message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
      time: '10:53 pm',
      img: images.man,
    },
    {
      id: 1,
      name: 'Dr. Brian A. Raghav',
      message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
      time: '10:53 pm',
      img: images.man,
    },
    {
      id: 1,
      name: 'Dr. Brian A. Raghav',
      message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
      time: '10:53 pm',
      img: images.man,
    },
    {
      id: 1,
      name: 'Dr. Brian A. Raghav',
      message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
      time: '10:53 pm',
      img: images.man,
    },
  ];
  const peopleRender=({item,index})=>{

    return(
      <>
            <PeopleContainer
            onPress={()=>{
              navigation.navigate("Chat")

            }}
             item={item} />
            <View style={{height:1,width:"95%",backgroundColor:colors.lightGray,alignSelf:"center"}} ></View>

      </>


    )

  }
  return (
    <View style={commonStyles.IosContainer}>
      <Spacer height={30} />
      <CustomText
        fontFamily={Poppins.bold}
        color={colors.secondary}
        fontSize={27}
        label={'Chat'}
        marginLeft={10}
      />
      <Spacer height={20} />

      <FlatList
      data={peopleData}
      // keyExtractor={()}
      renderItem={peopleRender}
      />


    </View>
  );
};

export default PeopleScreen;

const styles = StyleSheet.create({});
