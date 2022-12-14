import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ImageStore,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import TrackPlayer, {useProgress} from 'react-native-track-player';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {colors} from '../../../../utils/Colors';
import {images} from '../../../../assets/images';
import {Spacer} from '../../../../components/Spacer';
import CustomText from '../../../../components/CustomText';
import * as Progress from 'react-native-progress';

const MusicBody = () => {
  const [playing, setPlaying] = useState(true);
  const [tracker, setTracker] = useState(true);
  const progress = useProgress();

  const musicButton = [
    {
      id: 1,
      image: images.loop2,
    },
    {
      id: 2,
      image: images.backword,
      press: () => {
        TrackPlayer.forward;
      },
    },
    {
      id: 3,
      image: playing ? images.playButton : images.pauseButton,
      press: () => {
        tracker ? TrackPlayer.play() : TrackPlayer.pause();
        setPlaying(!playing);
        setTracker(!tracker);
      },
    },
    {
      id: 4,
      image: images.forward,
      press: () => {
        progress.position / parseInt(progress?.duration) + 1000;
      },
    },
    {
      id: 5,
      image: images.loop1,
    },
  ];

  // const useProgressin = (maxTimeInSeconds = 10) => {
  //   const [elapsedTime, setElapsedTime] = useState(0);
  //   const [progress, setProgress] = useState(0);

  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       if (progress < 1) {
  //         setElapsedTime(t => t + 1);
  //       }
  //     }, 100);
  //     return () => clearInterval(intervalId);
  //   }, []);

  //   useEffect(() => {
  //     setProgress(elapsedTime / maxTimeInSeconds);
  //   }, [elapsedTime]);

  //   return progress;
  // };
  // const ProgressIn = useProgressin();

  var duration = parseInt(progress?.duration, 10) + 1;

  return (
    <ScrollView>
      {/* <Spacer height={25} /> */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',

        }}>
        {musicButton.map((music, index) => (
          <View key={index}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={music.press}
              activeOpacity={0.6}>
              <Image
                source={music.image}
                // resizeMode={'contain'}
                style={{
                  height: index === 2 ? 70 : 17,
                  width: index === 2 ? 70 : 17,
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {index == 2 ? (
                  <Progress.Circle
                    progress={1 - Number(progress?.position) / duration}
                    color={colors.secondary}
                    borderRadius={20}
                    size={70}
                    thickness={5}
                    borderColor={colors.primary}
                    direction={'counter-clockwise'}
                  >
                    
                  </Progress.Circle>
                ) : (
                  <></>
                )}
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default MusicBody;

{
  /* <View>
<TouchableOpacity onPress={() => TrackPlayer.pause()}>
  <Text>Pause</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => TrackPlayer.play()}>
  <Text>Play</Text>
</TouchableOpacity>
</View>

<View>
<TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
  <Text>Prev</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
  <Text>Next</Text>
</TouchableOpacity>
</View> */
}
