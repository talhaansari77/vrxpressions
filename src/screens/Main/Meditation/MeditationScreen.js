import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PH10, PH20 } from '../../../utils/CommonStyles'
import { Spacer } from '../../../components/Spacer'
import CustomText from '../../../components/CustomText'
import { colors } from '../../../utils/Colors'
import { Poppins } from '../../../utils/Fonts'
import MeditationMainImg from './Moclecules/MeditationMainImg'
import TimerContainer from './Moclecules/TimerContainer'

const MeditationScreen = () => {
  return (
    <SafeAreaView >
        <PH10>
        <Spacer height={30} />
      <CustomText
        fontFamily={Poppins.bold}
        color={colors.secondary}
        fontSize={23}
        label={'Meditation'}
        marginLeft={10}
      />
            <Spacer height={10}/>


      <MeditationMainImg/>
      <Spacer height={30}/>

      <TimerContainer/>


        </PH10>
    </SafeAreaView>
  )
}

export default MeditationScreen

const styles = StyleSheet.create({})