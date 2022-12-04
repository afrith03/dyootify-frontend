import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Modal from './components/Modal';
import MusicPlayer from './components/MusicPlayer';

export default function App() {
const [darkMode, setdarkMode] = useState(true)
  return (
    <SafeAreaView className={`flex-1 items-center ${darkMode ? "bg-black":"bg-white "}
    `}>
  <View className="mt-8 dark">
    <MusicPlayer darkMode={darkMode} setdarkMode={setdarkMode}/>
    {/* <Modal/> */}
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}
