import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../../utils/Colors';
import {Stopwatch, Timer} from 'react-native-stopwatch-timer';
import {scale, verticalScale} from 'react-native-size-matters';
import {icons} from '../../../../assets/icons';
import commonStyles from '../../../../utils/CommonStyles';
import {Spacer} from '../../../../components/Spacer';
import PercentageSpacer from '../../../../components/PercentageSpacer';
import CustomText from '../../../../components/CustomText';
import {Poppins} from '../../../../utils/Fonts';
const TimerContainer = ({}) => {
  const [timerStart, setTimerStart] = useState(false);
  const [stopwatchStart, setStopwatchStart] = useState(false);
  const [totalDuration, setTotalDuration] = useState(90000);
  const [timerReset, setTimerReset] = useState(false);
  const [stopwatchReset, setStopwatchReset] = useState(false);
  const [completeTime, setCompleteTime] = useState(false);

  const toggleTimer = () => {
    // .setState({timerStart: !this.state.timerStart, timerReset: false});
  };

  const resetTimer = () => {
    // setState({timerStart: false, timerReset: true});
  };

  const toggleStopwatch = () => {
    setState({
      stopwatchStart: !this.state.stopwatchStart,
      stopwatchReset: false,
    });
  };

  const resetStopwatch = () => {
    // this.setState({stopwatchStart: false, stopwatchReset: true});
  };

  const getFormattedTime = time => {
    currentTime = time;
  };

  return (
    <View style={{height: '100%'}}>
      <View style={styles.mainContainer}>
        <View style={styles.innerContainer}>
          {!completeTime ? (
            <View>
              <Stopwatch
                start={stopwatchStart}
                reset={stopwatchReset}
                msecs={false}
                options={options}
                getTime={getFormattedTime}
              />
            </View>
          ) : (
            <View>
              <CustomText
                fontFamily={Poppins.bold}
                color={colors.white}
                fontSize={13}
                label={'157'}
                alignSelf="center"

              />
                 <CustomText
                fontFamily={Poppins.light}
                color={colors.white}
                fontSize={12}
                label={'Steps'}
              />
            </View>
          )}
        </View>
      </View>
      <PercentageSpacer height={'4%'} />

      <View style={styles.timeControl}>
        {stopwatchStart ? (
          <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            setCompleteTime(!completeTime);
          }}
            style={{width: 40, height: 40, alignSelf: 'center'}}>
            <Image
              resizeMode="contain"
              source={icons.pause}
              style={commonStyles.img}
            />
          </TouchableOpacity>
        ) : (
          <></>
        )}

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            setStopwatchStart(!stopwatchStart);
          }}
          style={{width: 40, height: 40, alignSelf: 'center'}}>
          <Image
            resizeMode="contain"
            source={stopwatchStart ? icons.start : icons.stop}
            style={commonStyles.img}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TimerContainer;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    padding: 10,
    height: 150,
    width: 150,
    borderRadius: 99,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  innerContainer: {
    width: '95%',
    height: '95%',
    backgroundColor: colors.black,
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '38%',
    alignSelf: 'center',
  },
});

const options = {
  container: {
    padding: 5,
    width: 100,
  },
  text: {
    fontSize: verticalScale(15),
    color: '#FFF',
    marginLeft: scale(7),
  },
};
