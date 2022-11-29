import {View} from 'react-native';
import { colors } from '../../../../utils/Colors';

const SelectorBadge = ({badge}) => {
  return (
    <View
      style={{
        height: 26/badge,
        width: 26/badge,
        borderRadius: 13/badge,
        position: 'absolute',
        top: 10,
        right: 10,
        borderColor: colors.white,
        borderWidth: 5/badge,
        shadowColor: colors.white,
        shadowOffset: {width: 1, height: -3/badge},
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation:5
      }}
    />
  );
};

export default SelectorBadge;
