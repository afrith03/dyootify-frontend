import React, { useState } from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import SongsMap from "./SongsMap";
function Songlist() {
  const [isOpen, setisOpen] = useState(true);
  var endPoint = "https://dyootify-server.vercel.app/getsongs";
  const [isSongLoaded, setisSongLoaded] = useState(false);
  const [loadedSongs, setloadedSongs] = useState([
    {
        "fileName": "Appatha (1).mp3",
        "fileTitle": "Appatha - isaitamilan.co",
        "fileAlbum": "Naai Sekar Returns",
        "fileArtist": "Vadivel",
        "filePerformer": "Vadivel",
        "driveId": "1wo-WDujF9Mi8hdUlP7xeJd6K4jsM7_5W",
        "driveLink": "https://drive.google.com/uc?export=download&id=1wo-WDujF9Mi8hdUlP7xeJd6K4jsM7_5W",
        "fileType": "audio/mpeg",
        "fileSize": "7.61 MB",
        "_id": "6390b9ac15d76d049faa2bc4"
    }
]
)
  return (
    <View className="absolute bg-slate-800 bottom-0 w-full p-5">
      <TouchableOpacity
        className="flex-row justify-between items-center mb-3"
        onPress={() => {
          setisOpen(!isOpen);
        }}
      >
        <Ionicons name="musical-note" size={30} color="#888888" />
        <Text className="text-lg text-slate-600">List of songes to View</Text>

        <Ionicons
          name={isOpen ? "chevron-down" : "chevron-up"}
          size={30}
          color="#888888"
          onPress={() => {
            axios
              .get(endPoint)
              .then(function (response) {
                console.log(response.data);
                setloadedSongs(response.data);
                setisSongLoaded(true)

              })
              .catch(function (error) {
                console.log(error);
              });
          }}
        />
      </TouchableOpacity>
      <ScrollView className={`${isOpen ? "block h-96" : "hidden"}`}>
        {/* this for song list map  */}

        {!isSongLoaded ? (
          <Text className="text-lg font-semibold">Loading....</Text>
        ) : ( 
<SongsMap loadedSongs={loadedSongs}/>
          // <View className="p-3 flex-row bg-orange-200 rounded-2xl my-2 items-center">
          //   <Ionicons name="musical-note" size={30} color="#888888" />
          //   <View className="mx-3">
          //     <Text className="text-lg font-semibold">Song name</Text>
          //     <Text className="text-base">Artist name</Text>
          //   </View>
          // </View>
        )}


  
      </ScrollView>
    </View>
  );
}

export default Songlist;
