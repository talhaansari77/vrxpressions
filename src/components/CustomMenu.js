import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import CustomText from './CustomText';
import {colors} from '../utils/Colors';
import {scale, verticalScale} from 'react-native-size-matters';
import ToggleSwitch from 'toggle-switch-react-native';

const CustomMenu = props => {
  const [isOn, setisOn] = useState(true);
  return (
    <View>
      <View>
        <TouchableOpacity activeOpacity={0.6} onPress={props.onClicked}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              paddingHorizontal: 20,
              height: verticalScale(60),
              backgroundColor: "#F8F3FE",
              alignItems: 'center',
            }}>
            <CustomText fontSize={12} label={props.txt1} />

            <Text>
              {/* {props ? ( */}
              <CustomText
                fontSize={props.fontSize || 13}
                label={props.txt2}
                fontWeight={"400"}
                marginRight={props.marginRight}
                alignSelf={props.alignSelf}
              />
              {/* // ) : props.icon ? ( */}
              {props.image ? (
                <Image
                  source={props.image}
                  resizeMode={'contain'}
                  style={{
                    height: verticalScale(10),
                    width: scale(10),
                    alignSelf: 'center',
                  }}
                />
              ) : (
                ''
              )}

              {props.toggle ? (
                <ToggleSwitch
                  isOn={isOn}
                  onColor={'#F4FFF4'}
                  // offColor={colors.secondary}
                  // trackOnStyle={{color: colors.black}}
                  thumbOffStyle={{backgroundColor: colors.grey}}
                  thumbonStyle={{backgroundColor: colors.primary}}
                  // thumbOffStyle={colors.primary}
                  size="large"
                  onToggle={() => {
                    setisOn(!isOn);
                  }}
                />
              ) : (
                ''
              )}

              {/* ) : (
                ''
              )} */}
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: colors.lightBlack,
          }}
        />
      </View>
    </View>
  );
};

export default CustomMenu;
