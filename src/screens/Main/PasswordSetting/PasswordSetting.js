import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

import PasswordScreenHeader from './Molecules/PasswordScreenHeader'
import PasswordScreenBody from './Molecules/PasswordScreenBody'
import { Spacer } from '../../../components/Spacer'


const PasswordSetting = () => {
  return (
    <View >
      <SafeAreaView>
        <Spacer height={20} />
        <PasswordScreenHeader/>
        <PasswordScreenBody/>
      {/* <PassScreenHeader />
      <AccountScreenBody /> */}
      </SafeAreaView>
    </View>
  )
}

export default PasswordSetting