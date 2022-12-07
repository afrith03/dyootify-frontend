import React from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function SongsMap({loadedSongs}) {
  return (
    <View>
      {loadedSongs.map((item, index) => (
        <TouchableOpacity
          key={index}
          className="p-3 flex-row bg-orange-200 rounded-2xl my-2 items-center"
          onPress={()=>{
            console.log(item)
          }}
        >
          <Ionicons name="musical-note" size={30} color="#888888" />
          <View className="mx-3">
            <Text className="text-lg font-semibold">{item.fileTitle}</Text>
            <Text className="text-base">{item.fileArtist}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default SongsMap;
