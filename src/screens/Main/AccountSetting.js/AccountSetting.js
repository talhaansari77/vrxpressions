import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import AccountScreenBody from './Molecules/AccountScreenBody'
import AccountScreenHeader from './Molecules/AccountScreenHeader'
import { Spacer } from '../../../components/Spacer'

const AccountSetting = ({navigation}) => {
  return (
    <View >
      <SafeAreaView>
        <Spacer height={20} />
      <AccountScreenHeader />
      <AccountScreenBody navigation={navigation}/>
      </SafeAreaView>
    </View>
  )
}

export default AccountSetting