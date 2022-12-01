import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../../utils/Colors';
import { scale } from 'react-native-size-matters';

export default function TopBar(props) {
  return (
    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <HeaderTabs
        text="Beginner"
        textColor="#fff"
        bgColor="#000"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderTabs
        text="Intermediate"
        textColor="#000"
        bgColor="#fff"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderTabs
        text="Advanced"
        textColor="#000"
        bgColor="#fff"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
}

const HeaderTabs = props => (
  <TouchableOpacity
    style={{
      backgroundColor:
        props.activeTab === props.text ? colors.secondary : '#fff',
      paddingHorizontal: scale(16),
      paddingVertical: 6,
      borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.text)}>
    <Text
      style={{
        color: props.activeTab === props.text ? '#fff' : '#000',
        fontSize: 15,
        fontWeight: props.activeTab === props.text ? '900' : '600',
      }}>
      {props.text}
    </Text>
  </TouchableOpacity>
);
