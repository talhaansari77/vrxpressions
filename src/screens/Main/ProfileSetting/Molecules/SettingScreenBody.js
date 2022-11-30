import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomText from '../../../../components/CustomText';
import {icons} from '../../../../assets/icons';
import {colors} from '../../../../utils/Colors';
import {Spacer} from '../../../../components/Spacer';
import CustomMenu from '../../../../components/CustomMenu';

const SettingScreenBody = () => {
  const SettingArray = [
    {
      id: 1,
      name: 'Account',
      icon: 1,
      line: (
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: colors.lightBlack,
          }}
        />
      ),
    },
    {
      id: 2,
      name: 'Notification',
      icon: 2,
    },
    {
      id: 3,
      name: 'Membership',
      icon: 3,
    },
    {
      id: 4,
      name: 'Documentation',
      icon: 4,
    },
    {
      id: 5,
      name: (
        <CustomText
          label={'Logout'}
          fontSize={12}
          fontFamily={'poppins-bold'}
        />
      ),
    },
  ];
  return (
    <View>
      <Spacer height={20} />
      <View>
        {SettingArray.map((settings, index) => (
          <View key={index}>
            <CustomMenu
              txt1={settings.name}
              image={settings.icon ? icons.rightArrow : ''}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default SettingScreenBody;
