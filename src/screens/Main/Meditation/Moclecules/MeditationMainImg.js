import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { verticalScale } from 'react-native-size-matters'
import { images } from '../../../../assets/images'
import commonStyles from '../../../../utils/CommonStyles'
import { Spacer } from '../../../../components/Spacer'
import CustomText from '../../../../components/CustomText'
import { Poppins } from '../../../../utils/Fonts'
import { colors } from '../../../../utils/Colors'
const MeditationMainImg = () => {
  return (
    <View style={{alignItems:"center"}}>
        <Spacer height={20}/>
        <View style={styles.imgContainer}>
            <Image
            resizeMode="contain"
             source={images.meditation1}
            style={commonStyles.img}
            />

        </View>
        <Spacer height={20}/>
        <CustomText
        fontFamily={Poppins.bold}
        color={colors.secondary}
        fontSize={23}
        label={'Meditation'}
        marginLeft={10}
      />

    </View>
  )
}

export default MeditationMainImg

const styles = StyleSheet.create({
    imgContainer:{
        width:"100%",
        height:verticalScale(160),

    }

})