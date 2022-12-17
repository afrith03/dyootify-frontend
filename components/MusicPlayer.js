import Slider from "@react-native-community/slider";
import React, { useEffect, useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwsome from "@expo/vector-icons/FontAwesome";
//testing
import { Audio } from "expo-av";

export default function MusicPlayer({ darkMode, setdarkMode }) {
  const audioBookPlaylist = [
    {
      _id: "6390bf6185d2654d779479bb",
      fileName: "Thee-Thalapathy-MassTamilan.dev.mp3",
      fileTitle: "Thee Thalapathy - MassTamilan.dev",
      fileAlbum: "Varisu - MassTamilan.dev",
      fileArtist: "STR (Silambarasan) - MassTamilan.dev",
      filePerformer: "STR (Silambarasan) - MassTamilan.dev",
      driveId: "1jPjOSGUZefH0_t5W-Fm3VBOSiT3t1h9W",
      driveLink:
        "https://drive.google.com/uc?export=download&id=1jPjOSGUZefH0_t5W-Fm3VBOSiT3t1h9W",
      fileType: "audio/mpeg",
      fileSize: "4.2 MB",
      createdAt: "2022-12-07T16:29:21.167Z",
      updatedAt: "2022-12-07T16:29:21.167Z",
      __v: 0,
    },
    {
      _id: "6390bf6385d2654d779479bd",
      fileName: "Ranjithame-MassTamilan.dev.mp3",
      fileTitle: "Ranjithame - MassTamilan.dev",
      fileAlbum: "Varisu - MassTamilan.dev",
      fileArtist: "Vijay, M.M. Manasi - MassTamilan.dev",
      filePerformer: "Vijay, M.M. Manasi - MassTamilan.dev",
      driveId: "1haYHM6gW32_Xjut_nfKI254y_HTRlBVn",
      driveLink:
        "https://drive.google.com/uc?export=download&id=1haYHM6gW32_Xjut_nfKI254y_HTRlBVn",
      fileType: "audio/mpeg",
      fileSize: "4.68 MB",
      createdAt: "2022-12-07T16:29:23.745Z",
      updatedAt: "2022-12-07T16:29:23.745Z",
      __v: 0,
    },
    {
      _id: "6390bf6785d2654d779479bf",
      fileName: "Appatha (1).mp3",
      fileTitle: "Appatha - isaitamilan.co",
      fileAlbum: "Naai Sekar Returns",
      fileArtist: "Vadivel",
      filePerformer: "Vadivel",
      driveId: "1_3xYykC-Fyz0tvDS_xewlzGEbrKW5i9N",
      driveLink:
        "https://drive.google.com/uc?export=download&id=1_3xYykC-Fyz0tvDS_xewlzGEbrKW5i9N",
      fileType: "audio/mpeg",
      fileSize: "7.61 MB",
      createdAt: "2022-12-07T16:29:27.086Z",
      updatedAt: "2022-12-07T16:29:27.086Z",
      __v: 0,
    },
  ];
  // const [sound, setSound] = React.useState();

  // async function playSound() {
  //   console.log('Loading Sound');

  //   const  sound  = new Audio.Sound()

  //  await sound.loadAsync({
  //     uri: "https://drive.google.com/uc?export=download&id=1wo-WDujF9Mi8hdUlP7xeJd6K4jsM7_5W"
  // })

  //   // const { sound } = await Audio.Sound.createAsync(  { uri: 'https://drive.google.com/uc?export=download&id=1wo-WDujF9Mi8hdUlP7xeJd6K4jsM7_5W'},{ shouldPlay: true });
  //   // setSound(sound);

  //   console.log('Playing Sound');
  //   await sound.playAsync();
  // }
  // async function pauseSong(){
  //   await sound.pauseAsync()
  //   console.log("paussedddd")
  // }

  // React.useEffect(() => {
  //   return sound
  //     ? () => {
  //         console.log('Unloading Sound');
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);

  const [playback, setPlayback] = useState(null);
  const [isPlaying, setisPlaying] = useState(false);
  const [currentIndex, setcurrentIndex] = useState(1);
  const [volume, setvolume] = useState(1.0);
  const [isBuffering, setisBuffering] = useState(false);
  const [disableBtn, setdisableBtn] = useState(false);

  useEffect(() => {
    if (isBuffering || isBuffering == undefined) {
      setdisableBtn(true);
    } else {
      setdisableBtn(false);
    }
  }, [isBuffering]);

  // const [songState, setsongState] = useState({
  //   isPlaying: false,
  //   playbackInstance: null,
  //   currentIndex: 1,
  //   volume: 1.0,
  //   isBuffering: false,
  // });

  const effect = async () => {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        //interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        // interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
        shouldDuckAndroid: true,
        staysActiveInBackground: true,
        playThroughEarpieceAndroid: true,
      }).then(loadAudio());
      console.log("effect function ran");
      loadAudio();
    } catch (e) {
      console.log(e);
      alert("use effect error"+e)
    }
  };
  useEffect(() => {
    effect();
    console.log("effect ran");
    return () => {};
  }, []);

  const loadAudio = async () => {
    try {
      const playbackInstance = new Audio.Sound();
      const source = {
        uri: audioBookPlaylist[currentIndex].driveLink,
      };

      const status = {
        shouldPlay: isPlaying,
        volume,
      };

      playbackInstance.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
      await playbackInstance.loadAsync(source, status, false);

      // setsongState({ ...songState, playbackInstance: playbackInstance });
      //need to check this
      setPlayback(playbackInstance);
      console.log("load audio ran");
      console.log(
        "buffering " +
          isBuffering +
          "is playing" +
          isPlaying +
          "current index" +
          currentIndex +
          "play back" +
          playback +
          "volume" +
          volume
      );
    } catch (e) {
      console.log(e);
      alert("Load audio error"+e)
    }
  };

  const onPlaybackStatusUpdate = (status) => {
    // setsongState({ ...songState, isBuffering: status.isBuffering });

    setisBuffering(status.isBuffering);
    // if(!status.isLoaded && playback != null) {
    //   loadAudio()
    // }
    console.log("child function ran");
    console.log(status);
  };
  // const handlePlayPause = async () => {
  //   //   const { isPlaying, playbackInstance } = songState
  //   //   isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync()
  //   //  console.log("first")
  //   //   await playbackInstance.playAsync();
  //   // console.log("played")
  //   //   setsongState({...songState,
  //   //     isPlaying: !isPlaying
  //   //   })
  // };

  const previousSong = async () => {
    await playback
      .unloadAsync()
      .then(setcurrentIndex(currentIndex - 1))
      .then(loadAudio())
      .then(setdisableBtn(false));
  };
  const nextSong = async () => {
    await playback
      .unloadAsync()
      .then(setcurrentIndex(currentIndex + 1))
      .then(loadAudio())
      .then(setdisableBtn(false));
  };

  return (
    <>
      <View>
        <View>
          <View className="TITLE">
            <Text
              onPress={() => {
                setdarkMode(!darkMode);
              }}
              className="font-bold text-xl text-center text-slate-900"
            >
              Dyootify
            </Text>
          </View>
          {/* song cover */}
          <View className="IMAGE_COVER">
            {!isBuffering || !isBuffering == undefined ? (
              <Image
                // source={require('/assets/img-1.jpg')}
                className="rounded-3xl w-80 h-80 mt-7 shadow "
                // source={{uri: 'https://reactjs.org/logo-og.png'}}
                source={{
                  uri: "https://images.unsplash.com/photo-1670272502333-dcfab6832b18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                }}
              />
            ) : (
              <Text>Loading...</Text>
            )}
          </View>
          {/* song cover - end  */}
          {/* Title of the song start  */}
          <View className="">
            <Text className="text-center text-2xl font-bold mt-8 text-slate-800">
             {audioBookPlaylist[currentIndex].fileTitle}
            </Text>
            <Text>
              {"buffering " +
                isBuffering +
                " is playing" +
                isPlaying +
                " current index" +
                currentIndex +
                " play back" +
                playback +
                " volume" +
                volume +
                "d btn" +
                disableBtn}
            </Text>
            <Text className="text-center text-lg my-4 text-slate-600">
            {audioBookPlaylist[currentIndex].fileArtist}
            </Text>
          </View>
          {/* Title of the song end  */}

          {/* Slider start  */}
          <View className="mt-6">
            <Slider
              className="w-full"
              minimumValue={0}
              value={69}
              maximumValue={100}
              thumbTintColor="#0313fc"
              minimumTrackTintColor="#03f0fc"
              maximumTrackTintColor="#b103fc"
              onSlidingComplete={() => {}}
            />
            <View className="flex-row justify-between">
              <Text>00.00</Text>

              <Text>00.00</Text>
            </View>
          </View>
          {/* slider end  */}

          {/* control pannel start */}
          <View className="flex-row justify-between items-center mt-8">
            <TouchableOpacity onPress={() => {}}>
              <Ionicons name="shuffle" size={30} color="#888888" />
            </TouchableOpacity>
            <TouchableOpacity
              disabled={disableBtn}
              onPress={() => {
                setdisableBtn(true);
                previousSong();
                // await playback.pauseAsync();
                // await playback.unloadAsync();
                // setcurrentIndex(currentIndex - 1);
                console.log("previous song");
                // loadAudio();
                // await playback.playAsync();
              }}
            >
              <Ionicons name="play-skip-back" size={30} color="#888888" />
            </TouchableOpacity>
            {/* play button  */}
            <View>
              {!isPlaying ? (
                <TouchableOpacity>
                  <Ionicons
                    name="play"
                    onPress={async () => {
                      if(playback == null){
                        Alert("Playback is null")
                      }else{
                      await playback.playAsync().then(setisPlaying(!isPlaying));
                      console.log("played the song");
                      console.log(
                        "buffering " +
                          isBuffering +
                          "is playing" +
                          isPlaying +
                          "current index" +
                          currentIndex +
                          "play back" +
                          playback +
                          "volume" +
                          volume
                      );}
                    }}
                    size={50}
                    color="#888888"
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity>
                  <Ionicons
                    name="pause"
                    onPress={async () => {
                      await playback
                        .pauseAsync()
                        .then(setisPlaying(!isPlaying));
                      //  setsongState({ ...songState, isPlaying: !isPlaying });
                      console.log("paused the song");
                      console.log(
                        "buffering " +
                          isBuffering +
                          "is playing" +
                          isPlaying +
                          "current index" +
                          currentIndex +
                          "play back" +
                          playback +
                          "volume" +
                          volume
                      );
                    }}
                    size={50}
                    color="#888888"
                  />
                </TouchableOpacity>
              )}
            </View>
            {/* next button  */}
            <TouchableOpacity
              disabled={disableBtn}
              onPress={async () => {
                setdisableBtn(true);
                nextSong();
                console.log("Next song");
              }}
            >
              <Ionicons name="play-skip-forward" size={30} color="#888888" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                loadAudio();
              }}
            >
              <Ionicons name="repeat" size={30} color="#888888" />
            </TouchableOpacity>
          </View>
          {/* control pannel end  */}
        </View>
      </View>
    </>
  );
}
