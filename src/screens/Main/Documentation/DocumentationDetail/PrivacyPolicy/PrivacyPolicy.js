import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import CustomTitle from '../../../../../components/CustomTitle'
import { Spacer } from '../../../../../components/Spacer'
import Paragraph from '../../Molecules/Paragraph'

const PrivacyPolicy = () => {
  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    >
      <SafeAreaView>
      <Spacer height={20} />

        <CustomTitle title={'Privacy Policy'} />
      </SafeAreaView>
      <Spacer height={30} />
     <Paragraph label={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus laoreet eleifend morbi pharetra enim vulputate malesuada mauris. Ut lectus at ut feugiat volutpat nunc placerat nisl, accumsan. Fames ligula pellentesque ipsum et risus egestas in pellentesque. Amet rhoncus tellus scelerisque eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus laoreet eleifend morbi pharetra enim vulputate malesuada mauris. Ut lectus at ut feugiat volutpat nunc placerat nisl, accumsan. Fames ligula pellentesque ipsum et risus egestas in pellentesque. Amet rhoncus tellus scelerisque eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus laoreet eleifend morbi pharetra enim vulputate malesuada mauris. Ut lectus at ut feugiat volutpat nunc placerat nisl, accumsan. Fames ligula pellentesque ipsum et risus egestas in pellentesque. Amet rhoncus tellus scelerisque eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus laoreet eleifend morbi pharetra enim vulputate malesuada mauris. Ut lectus at ut feugiat volutpat nunc placerat nisl, accumsan. Fames ligula pellentesque ipsum et risus egestas in pellentesque."} />
    </ScrollView>
  )
}

export default PrivacyPolicy