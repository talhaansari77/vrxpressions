import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import CustomText from '../../../../components/CustomText';

const Paragraph = (props) => {
  return (
    <View>
      <ScrollView>
        <View
          style={{
            width: '100%',
            paddingHorizontal: 20,
            alignItems: 'center',
          }}>
          <CustomText
            label={props.label}
            lineHeight={28}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Paragraph;
