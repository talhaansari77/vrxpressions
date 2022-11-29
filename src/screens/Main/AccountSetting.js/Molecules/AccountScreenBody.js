import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomText from '../../../../components/CustomText';
import {icons} from '../../../../assets/icons';
import {colors} from '../../../../utils/Colors';
import {Spacer} from '../../../../components/Spacer';
import CustomMenu from '../../../../components/CustomMenu';

const AccountScreenBody = () => {
  const SettingArray = [
    {
      id: 1,
      name: 'Username',
      info: 'lisajordan',
    },
    {
      id: 2,
      name: 'Password',
      info: '*********',
    },
    {
      id: 3,
      name: 'Email',
      info: 'xyz@gmail.com',
    },
    {
      id: 4,
      name: 'Phone Number',
      info: '+1 123 123 123',
    },
    {
      id: 5,
      name: (
        <CustomText
          label={'Delete My Account'}
          fontSize={12}
          fontFamily={'poppins-bold'}
        />
      ),
    },
  ];
  return (
    <View>
      <Spacer height={50} />
      <View>
        {SettingArray.map((settings, index) => (
          <View>
            <View key={index}>
            <CustomMenu
              txt1={settings.name}
              txt2={settings.info}
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
    </View>
  );
};

export default AccountScreenBody;
