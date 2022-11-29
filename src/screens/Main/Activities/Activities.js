import {View, Text, ScrollView, FlatList, Platform} from 'react-native';
import React from 'react';
import commonStyles, {PH10, PH20} from '../../../utils/CommonStyles';
import {Spacer} from '../../../components/Spacer';
import {scale, verticalScale} from 'react-native-size-matters';
import CustomText from '../../../components/CustomText';
import {Poppins} from '../../../utils/Fonts';
import {colors} from '../../../utils/Colors';
// import Card from './Molecules/Card';
import PrimaryCard from '../../Auth/Interests/Molecules/PrimaryCard';

const Activities = () => {
  return (
    <View style={{flex: 1}}>
      <Spacer height={Platform.OS === 'ios' ? 40 : 5} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{height: verticalScale(260)}}>
        {[1, 2, 3, 4, 5].map(item => (
          <>
            <Spacer width={20} />
            <View style={{height: verticalScale(140), width: scale(130)}}>
              {/* <Card fontSize={10} badge={3} /> */}
              <PrimaryCard fontSize={10} badge={3} />
            </View>
          </>
        ))}
        <Spacer width={20} />
      </ScrollView>
      {/* <Spacer height={Platform.OS === 'ios' ? 40 : 5} /> */}
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
        data={[1, 2, 3, 4, 5, 6]}
        numColumns={2}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: 'space-evenly',
          marginBottom: verticalScale(50),
        }}
        renderItem={({item}) => (
          <View style={{height: verticalScale(140), width: scale(130)}}>
            {/* <Card fontSize={10} badge={3} /> */}
            <PrimaryCard fontSize={10} badge={3} />
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Activities;
