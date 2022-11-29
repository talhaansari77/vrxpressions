import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ManImage from './Molecules/ManImage'
import commonStyles from '../../../../utils/CommonStyles'
import PrecentageSpacer from '../../../../components/PrecentageSpacer'
import CallContainer from '../AudioCall/Molecules/CallContainer'

const VideoCallScreen = () => {
  return (
    <>
      <View >
      <ManImage/>

      {/* <CallContainer/> */}
      {/* <Text>VideoCallScreen</Text> */}
    </View>
    </>
  
  )
}

export default VideoCallScreen

const styles = StyleSheet.create({})