import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import CustomText from '../../../components/CustomText';
import { Spacer } from '../../../components/Spacer';
import CustomMenu from '../../../components/CustomMenu';
import { colors } from '../../../utils/Colors';
import CustomTitle from '../../../components/CustomTitle';

const MemberShipScreen = () => {
    const SettingArray = [
        {
          id: 1,
          name: 'Current Membership',
          info:"Free Trial"
        },
        {
          id: 2,
          name:  <CustomText
          label={'Upgrade Membership'}
          fontSize={12}
          fontFamily={'poppins-bold'}
        />,
        },
      ];
  return (
    <View>
      <SafeAreaView>
       <CustomTitle title={"Membership"} />
    <Spacer height={40} />
      {SettingArray.map((settings, index) => (
        <View key={index}>
          <CustomMenu
              txt1={settings.name}
              txt2={settings.info}
              marginRight={"20"}
            />
        </View>
      ))}
      </SafeAreaView>
    </View>
  )
}

export default MemberShipScreen