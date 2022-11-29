import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import CustomTitle from '../../../../../components/CustomTitle';
import {SafeAreaView} from 'react-native';
import {Spacer} from '../../../../../components/Spacer';
import CustomMenu from '../../../../../components/CustomMenu';
import CustomText from '../../../../../components/CustomText';
import Paragraph from '../../Molecules/Paragraph';

const TermsAndConditions = () => {
  return (
    <View>
      <SafeAreaView>
        <CustomTitle title={'Terms And Conditions'} />
      </SafeAreaView>
      <Spacer height={40} />
     <Paragraph label={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus laoreet eleifend morbi pharetra enim vulputate malesuada mauris. Ut lectus at ut feugiat volutpat nunc placerat nisl, accumsan. Fames ligula pellentesque ipsum et risus egestas in pellentesque. Amet rhoncus tellus scelerisque eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus laoreet eleifend morbi pharetra enim vulputate malesuada mauris. Ut lectus at ut feugiat volutpat nunc placerat nisl, accumsan. Fames ligula pellentesque ipsum et risus egestas in pellentesque. Amet rhoncus tellus scelerisque eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus laoreet eleifend morbi pharetra enim vulputate malesuada mauris. Ut lectus at ut feugiat volutpat nunc placerat nisl, accumsan. Fames ligula pellentesque ipsum et risus egestas in pellentesque. Amet rhoncus tellus scelerisque eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus laoreet eleifend morbi pharetra enim vulputate malesuada mauris. Ut lectus at ut feugiat volutpat nunc placerat nisl, accumsan. Fames ligula pellentesque ipsum et risus egestas in pellentesque."} />
    </View>
  );
};

export default TermsAndConditions;
