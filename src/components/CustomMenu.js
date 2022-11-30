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
              height: 80,
              backgroundColor: colors.white,
              alignItems: 'center',
            }}>
            <CustomText fontSize={12} label={props.txt1} />

            <Text>
              {/* {props ? ( */}
              <CustomText
                fontSize={props.fontSize || 13}
                label={props.txt2}
                marginRight={props.marginRight}
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
                    // justifyContent:"center",
                    // alignItems:"center",
                    // alignContent:"center",
                    // backgroundColor:"red",
                    // marginTop:10
                    // shadowColor: '#000',
                    // shadowOffset: {width: 0, height: 3},
                    // shadowOpacity: 0.4,
                    // shadowRadius: 5,
                    // backgroundColor: '#000',
                    // paddingBottom: 50,
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
