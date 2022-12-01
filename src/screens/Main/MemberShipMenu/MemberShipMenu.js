import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import CustomText from '../../../components/CustomText';
import { Spacer } from '../../../components/Spacer';
import CustomMenu from '../../../components/CustomMenu';
import { colors } from '../../../utils/Colors';
import CustomTitle from '../../../components/CustomTitle';

const MemberShipMenu = ({navigation}) => {
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
        onClicked:()=>{
          navigation.navigate("MemberShipScreen")

        }
        },
      ];
      return (
        <View>
          <SafeAreaView>
          <Spacer height={20} />

           <CustomTitle title={"Membership"} />
        <Spacer height={40} />
          {SettingArray.map((settings, index) => (
            <View key={index}>
              <CustomMenu
              onClicked={settings.onClicked}
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

export default MemberShipMenu

