import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import React, {useState} from 'react';
import {
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../../../../utils/Colors';
import { icons } from '../../../../assets/icons';
import commonStyles from '../../../../utils/CommonStyles';

const WriteMessage = () => {
  const [textMessage, setTextMessage] = useState([]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Type here..."
          placeholderTextColor={colors.black}
          style={styles.inPutContainer}
          value={textMessage}
          onChangeText={value => setTextMessage(value)}
        />

        <View style={{width: verticalScale(10)}} />

          <TouchableOpacity
            activeOpacity={0.6}
            disabled={!textMessage}
            style={styles.sendContainer}
            // onPress={() => onSend(textMessage)}
          >
            <Image source={icons.send}
            resizeMode="contain"
            style={commonStyles.img}
            />

            
          </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default WriteMessage;

const styles = ScaledSheet.create({
  textInputContainer: {
    backgroundColor: colors.white,
    borderTopLeftRadius: '20@s',
    borderTopRightRadius: '20@s',
    minHeight:verticalScale(60),
    maxHeight:verticalScale(100),
    // paddingTop: verticalScale(20),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: verticalScale(5),
  },
  inPutContainer: {
    backgroundColor: colors.white,
    // height: verticalScale(35),
    fontSize: verticalScale(14),
    width: '75%',
    color: colors.black,
    fontWeight:"600",
    paddingHorizontal: verticalScale(10),
  },

  sendContainer: {
    width: '20@s',
    height: '25@vs',
 
  },
});
