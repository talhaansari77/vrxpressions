import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import CustomTitle from '../../../../../components/CustomTitle'
import { Spacer } from '../../../../../components/Spacer'
import Paragraph from '../../Molecules/Paragraph'

const Disclaimer = () => {
  return (
    <View>
      <SafeAreaView>
        <CustomTitle title={'Disclaimer'} />
      </SafeAreaView>
      <Spacer height={40} />
     <Paragraph label={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus laoreet eleifend morbi pharetra enim vulputate malesuada mauris. Ut lectus at ut feugiat volutpat nunc placerat nisl, accumsan. Fames ligula pellentesque ipsum et risus egestas in pellentesque. Amet rhoncus tellus scelerisque eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus laoreet eleifend morbi pharetra enim vulputate malesuada mauris. Ut lectus at ut feugiat volutpat nunc placerat nisl, accumsan. Fames ligula pellentesque ipsum et risus egestas in pellentesque. Amet rhoncus tellus scelerisque eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus laoreet eleifend morbi pharetra enim vulputate malesuada mauris. Ut lectus at ut feugiat volutpat nunc placerat nisl, accumsan. Fames ligula pellentesque ipsum et risus egestas in pellentesque. Amet rhoncus tellus scelerisque eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus laoreet eleifend morbi pharetra enim vulputate malesuada mauris. Ut lectus at ut feugiat volutpat nunc placerat nisl, accumsan. Fames ligula pellentesque ipsum et risus egestas in pellentesque."} />
    </View>
  )
}

export default Disclaimer