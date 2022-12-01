import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../../../utils/Colors';
import CustomText from '../../../../components/CustomText';
import {scale} from 'react-native-size-matters';

const DayContainer = ({item,index}) => {
  return (
    <TouchableOpacity 
    activeOpacity={0.6}
    style={[styles.maincontainer,{
        backgroundColor: index==4 || index==5? "transparent":colors.secondary,



    }]}>
      <CustomText 
      fontWeight={ index==4 || index==5?"400":"500"}
      label={item} color={ index==4 || index==5? colors.black:colors.white} fontSize={13} />
    </TouchableOpacity>
  );
};

export default DayContainer;

const styles = StyleSheet.create({
  maincontainer: {
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.secondary,
    width: 39,
    height: 39,
    marginLeft: "3.5%",
  },
});
