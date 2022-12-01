import { StyleSheet, Text, View,TouchableOpacity,Platform,KeyboardAvoidingView,TextInput } from 'react-native'
import React,{useState} from 'react'
import AudioVideoContainer from './Molecules/AudioVideoContainer'
import commonStyles from '../../../utils/CommonStyles'
import { Spacer } from '../../../components/Spacer'
import { ChatBody } from '../../../components/ChatBody'
import { colors } from '../../../utils/Colors'
import { verticalScale,moderateScale, ScaledSheet } from 'react-native-size-matters'
import WriteMessage from './Molecules/WriteMessage'

const ChatScreen = ({navigation}) => {
    return (
    <View style={commonStyles.IosContainer}>
        <Spacer height={20}/>
        <AudioVideoContainer
        onAudioCall={()=>{
            navigation.navigate("AudioCall")

        }}
        onVideoCall={()=>{
            navigation.navigate("VideoCall")

        }}
        />
        <ChatBody/>
        <WriteMessage/>

       
    </View>
  )
}

export default ChatScreen

