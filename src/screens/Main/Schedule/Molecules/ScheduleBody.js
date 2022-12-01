import { StyleSheet, Text, View, } from 'react-native'
import React,{useState} from 'react'
import DatePicker from 'react-native-date-picker'
import { colors } from '../../../../utils/Colors'
import { scale, verticalScale } from 'react-native-size-matters'
import CustomText from '../../../../components/CustomText'
import { Poppins } from '../../../../utils/Fonts'
import { Spacer } from '../../../../components/Spacer'

const ScheduleBody = () => {
    const [date, setDate] = useState(new Date())

  return (
      <>
        <View style={styles.mainContainer}>
      <DatePicker
      mode='time'
       date={date} onDateChange={setDate} />
        </View>
        <View style={{width:"85%",padding:scale(5),paddingTop:verticalScale(20),}}>

        <CustomText
        fontFamily={Poppins.bold}
        color={colors.black}
        fontSize={18}
        label={'Which day would you like to meditate?'}
        marginLeft={10}
        marginRight={10}
      />
      <Spacer height={20}/>
         <CustomText
        fontFamily={Poppins.light}
        color={colors.black}
        fontSize={14}
        label={'Everyday is best, but we recommend picking at least five.'}
        marginLeft={10}
      />
        

        </View>

      </>
  
  )
}

export default ScheduleBody

const styles = StyleSheet.create({
    mainContainer:{
        width:"100%",
        backgroundColor:colors.white,
        alignItems:"center",
        borderRadius:scale(15),

    }

})