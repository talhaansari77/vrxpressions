import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomText from '../../../../components/CustomText';
import { icons } from '../../../../assets/icons';
import { colors } from '../../../../utils/Colors';
import { Spacer } from '../../../../components/Spacer';
import CustomMenu from '../../../../components/CustomMenu';
import CustomButton from '../../../../components/CustomButton';
import { verticalScale } from 'react-native-size-matters';

const PasswordScreenBody = () => {
  const PasswordArray = [
    {
      id: 1,
      name: 'Current Password',
      info: '*********',
    },
    {
      id: 2,
      name: 'New Password',
      info: '*********',
    },
    {
      id: 3,
      name: 'Confirm New Password',
      info: '*********',
    },
  
  ];
  return (
    <View>
      <Spacer height={50} />
      <View>
        {PasswordArray.map((settings, index) => (
          <View>
            <View key={index}>
            <CustomMenu
              txt1={settings.name}
              txt2={settings.info}   
               alignSelf={"flex-end"}

            />
          </View>
            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: colors.lightBlack,
              }}
            />
          </View>
        ))}
      </View>
      <Spacer height={20}/>

      <CustomButton title="Save"
      backgroundColor={colors.secondary}
      width={"50%"}
      height={verticalScale(35)}
      alignSelf={"center"}

      
      />

    </View>
  );
};

export default PasswordScreenBody;
