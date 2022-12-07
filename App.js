import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import Modal from "./components/Modal";
import MusicPlayer from "./components/MusicPlayer";
import Songlist from "./components/Songlist";
// for test
import axios from "axios";
// AppRegistry.registerComponent(...);
// TrackPlayer.registerPlaybackService(() => require('./service'));
export default function App() {
  var endPoint = "https://dyootify-server.vercel.app";
  const [darkMode, setdarkMode] = useState(true);
  return (
    <SafeAreaView
      className={`flex-1 items-center ${darkMode ? "bg-black" : "bg-white "}
    `}
    >
      <View className="mt-8 mx-0 p-0 dark">
        <Text
          onPress={() => {
            axios
              .get(endPoint + "/welcome")
              .then(function (response) {
                console.log(response.data);
              })
              .catch(function (error) {
                console.log(error);
              });
          }}
          className="font-bold text-xl text-center text-slate-900"
        >
          testing button
        </Text>
        <MusicPlayer darkMode={darkMode} setdarkMode={setdarkMode} />

        {/* <Modal/> */}
        <StatusBar style="auto" />
      </View>
      <Songlist />
    </SafeAreaView>
  );
}
