import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ActivityIndicator,Platform } from 'react-native';
// import { Ionicons } from "@expo/vector-icons";
import { ScaledSheet, verticalScale, scale, moderateScale } from 'react-native-size-matters';

// import { ActivityIndicator } from "react-native-paper";
import { colors } from '../utils/Colors';
import { Montserrat, Poppins } from '../utils/Fonts';
function CustomButton({
  loading,
  title,
  onPress,
  icon,
  color,
  width,
  height,
  borderColor,
  borderRadius,
  marginTop,
  alignItems,
  justifyContent,
  borderWidth,
  backgroundColor,
  fontFamily,
  marginBottom,
  fontSize,
  marginHorizontal,
  alignSelf,
  shadowOpacity,
  top,
  left
}) {
  return (
    <TouchableOpacity
      disabled={loading}
      activeOpacity={0.6}
      style={[
        {
          backgroundColor: backgroundColor || colors.primary,
          width: width || '100%',
          height: height || verticalScale(50),
          borderRadius: borderRadius || 30,
          alignItems: alignItems || 'center',
          justifyContent: justifyContent || 'center',
          marginTop,
          marginBottom:marginBottom,
          marginHorizontal:marginHorizontal,
          alignSelf:alignSelf,
          shadowColor: Platform.OS == 'ios' ? '#212529' : colors.black,
          shadowRadius: 8,
          elevation: 5,
          alignItems: 'center',
          shadowOpacity: shadowOpacity || 0.4,
          justifyContent: 'center',
      
          shadowOffset: {width: 1, height: 2},
          
        },
      ]}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator color={colors.white} size={moderateScale(26)} />
      ) : (
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={[
              {
                color: color || colors.white,
                fontSize: verticalScale(fontSize|| 14),
                fontFamily: fontFamily || Poppins.bold
              },
            ]}
          >
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  filledButton: {
    backgroundColor: colors.primary,
  },
});

export default CustomButton;
