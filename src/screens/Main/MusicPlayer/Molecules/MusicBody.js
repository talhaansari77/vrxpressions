import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ImageStore,
} from 'react-native';
import React, {useState} from 'react';
import TrackPlayer, { useProgress } from 'react-native-track-player';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {colors} from '../../../../utils/Colors';
import {images} from '../../../../assets/images';
import {Spacer} from '../../../../components/Spacer';
import CustomText from '../../../../components/CustomText';
// import * as Progress from 'react-native-progress';

const MusicBody = () => {
  const [playing, setPlaying] = useState(true);
  const [tracker, setTracker] = useState(true);
  const musicButton = [
    {
      id: 1,
      image: images.loop2,
    },
    {
      id: 2,
      image: images.backword,
      press: () => {
        TrackPlayer.forward();
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
      // hw: style={{height:80, width:80}}
    },
    {
      id: 4,
      image: images.forward,
    //   press: () => {
    //     TrackPlayer.getTrack(20);
    //   },
    },
    {
      id: 5,
      image: images.loop1,
    },
  ];
  const progress = useProgress();
//   const MyPlayerBar = () => {
    

//     return (
//             // Note: formatTime and ProgressBar are just examples:
//             <View>
//                 <Text>{formatTime(progress.position)}</Text>
//                 <View>
//                     progress={progress.position}
//                     buffered={progress.buffered}
//                     </View>
//             </View>
//         );

// }
// const useProgress = (maxTimeInSeconds = 300) => {
//     const [elapsedTime, setElapsedTime] = useState(0);
//     const [progress, setProgress] = useState(0);

//     useEffect(() => {
//       const intervalId = setInterval(() => {
//         if (progress < 1) {
//           setElapsedTime(t => t + 1);
//         }
//       }, 100);
//       return () => clearInterval(intervalId);
//     }, []);

//     useEffect(() => {
//       setProgress(elapsedTime / maxTimeInSeconds);
//     }, [elapsedTime]);

//     return progress;
//   };
  return (
    <View>
      <Spacer height={30} />
      <Text>{progress.position}</Text>
      <Text>{progress.buffered}</Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        {musicButton.map((music, index) => (
          <View key={index}>
            <TouchableOpacity onPress={music.press} activeOpacity={0.6}>
              <Image
                source={music.image}
                resizeMode={'contain'}
                style={{
                  height: index === 2 ? 80 : 17,
                  width: index === 2 ? 80 : 17,
                }}
              />
            </TouchableOpacity>
          </View>
        ))}
        <Text>
        
        </Text>
        {/* <View style={{color:colors.black}}>
            {TrackPlayer.setupPlayer}
        </View> */}
        {/* <Image source={images.loop2} resizeMode={"contain"} style={{height:17, width:17}} />
            <Image source={images.backword} resizeMode={"contain"} style={{height:17, width:17}} />
            <Image source={images.pauseButton} resizeMode={"contain"} style={{height:80, width:80}} />
            <Image source={images.forward} resizeMode={"contain"} style={{height:17, width:17}} />
            <Image source={images.loop1} resizeMode={"contain"} style={{height:17, width:17}} /> */}
      </View>
    </View>
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
