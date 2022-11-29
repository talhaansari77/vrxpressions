import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import CustomTitle from '../../../../components/CustomTitle';
import {Spacer} from '../../../../components/Spacer';
import CustomMenu from '../../../../components/CustomMenu';
import CustomText from '../../../../components/CustomText';

const DocumentationList = ({navigation}) => {
  const SettingArray = [
    {
      id: 1,
      name: 'Terms and Conditions',
      onPress: ()=>{navigation.navigate("TermsAndConditions")}
    },
    {
      id: 2,
      name: 'Privacy Policy',
      onPress: ()=>{navigation.navigate("PrivacyPolicy")}
    },
    {
      id: 3,
      name: 'Disclaimer',
      onPress: ()=>{navigation.navigate("Disclaimer")}
    },
  ];
  return (
    <View>
      <SafeAreaView>
        <CustomTitle title={'Documentations'} />
        <Spacer height={40} />
        {SettingArray.map((settings, index) => (
          <View key={index}>
            {/* onPress={} */}
            <CustomMenu
              txt1={settings.name}
              txt2={settings.info}
              marginRight={'20'}
              onClicked={settings.onPress}
            />
          </View>
        ))}
      </SafeAreaView>
    </View>
  );
};

export default DocumentationList;
