import { View, Text } from 'react-native'
import React from 'react'
import CustomText from '../../../../components/CustomText'
import { colors } from '../../../../utils/Colors'
import CustomTitle from '../../../../components/CustomTitle'

const AccountScreenHeader = () => {
  return (
   <View>
    <CustomTitle title={"Account Setting"} />
   </View>
  )
}

export default AccountScreenHeader