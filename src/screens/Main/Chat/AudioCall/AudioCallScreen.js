import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainImage from './Molecules/MainImage'
import CallContainer from './Molecules/CallContainer'
import { icons } from '../../../../assets/icons'
import { colors } from '../../../../utils/Colors'
import PercentageSpacer from '../../../../components/PercentageSpacer'

const AudioCallScreen = () => {
  return (
    <View>
      <PercentageSpacer height={"10%"}/>

      <MainImage/>

      <CallContainer
      imgVideo={icons.videocall}
      imgCallColor={colors.black}
      />
    </View>
  )
}

export default AudioCallScreen

const styles = StyleSheet.create({})