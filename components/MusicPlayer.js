import Slider from "@react-native-community/slider";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwsome from "@expo/vector-icons/FontAwesome";

export default function MusicPlayer({ darkMode, setdarkMode }) {
  return (<>
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
          <Image
            // source={require('/assets/img-1.jpg')}
            className="rounded-3xl w-80 h-80 mt-7 shadow "
            // source={{uri: 'https://reactjs.org/logo-og.png'}}
            source={{
              uri: "https://images.unsplash.com/photo-1664574654700-75f1c1fad74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
            }}
          />
        </View>
        {/* song cover - end  */}
        {/* Title of the song start  */}
        <View className="">
          <Text className="text-center text-2xl font-bold mt-8 text-slate-800">
            Title of the Song
          </Text>
          <Text className="text-center text-lg my-4 text-slate-600">
            Artist Name
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
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="play-skip-back" size={30} color="#888888" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="play" size={50} color="#888888" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="play-skip-forward" size={30} color="#888888" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="repeat" size={30} color="#888888" />
          </TouchableOpacity>
        </View>
        {/* control pannel end  */}
        

      </View>
    </View>
          </>
        
  );
}
