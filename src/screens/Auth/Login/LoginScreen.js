import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import commonStyles, { PH10 } from '../../../utils/CommonStyles'
import { images } from '../../../assets/images'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import { Spacer } from '../../../components/Spacer'
import BodyItem from './Molecules/BodyItem'
import { Poppins } from '../../../utils/Fonts'

const LoginScreen = () => {
  return (
    <View style={commonStyles.IosPadding}>
      <PH10>
        <Text style={{fontFamily:Poppins.bold}}>fvfjvfjb</Text>
        



      </PH10>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})