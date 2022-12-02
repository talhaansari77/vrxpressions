import { View, Text } from 'react-native'
import React from 'react'
import { Spacer } from './Spacer'
import CustomText from './CustomText'
import { colors } from '../utils/Colors'

const CustomTitle = ({...props}) => {
  return (
    <View>
       {/* <Spacer height={30} /> */}
      <View style={{width:"100%", paddingHorizontal:20}}>
        <CustomText
          label={props.title}
          fontSize={props.fontSize|| 24}
          fontFamily={'Poppins-bold'}
          color={colors.secondary}
        />
    </View>
    </View>
  )
}

export default CustomTitle