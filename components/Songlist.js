import React, { useState } from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
function Songlist() {
  const [isOpen, setisOpen] = useState(true);
  return (
    <View className="absolute bg-slate-800 bottom-0 w-full p-5">
      <TouchableOpacity
        className="flex-row justify-between items-center"
        onPress={() => {setisOpen(!isOpen)}}
      >
        <Ionicons name="musical-note" size={30} color="#888888" />
        <Text className="text-lg text-slate-600">List of songes to View</Text>

        <Ionicons name="chevron-up" size={30} color="#888888" />
      </TouchableOpacity>
      <ScrollView className={`${isOpen ? "block h-96" : "hidden"}`}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          asperiores minima repellendus beatae iste, error tempora, atque
          facilis perferendis minus officiis. Iste voluptate ipsa libero omnis
          
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          asperiores minima repellendus beatae iste, error tempora, atque
          facilis perferendis minus officiis. Iste voluptate ipsa libero omnis
          
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          asperiores minima repellendus beatae iste, error tempora, atque
          facilis perferendis minus officiis. Iste voluptate ipsa libero omnis
          
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          asperiores minima repellendus beatae iste, error tempora, atque
          facilis perferendis minus officiis. Iste voluptate ipsa libero omnis
          
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          asperiores minima repellendus beatae iste, error tempora, atque
          facilis perferendis minus officiis. Iste voluptate ipsa libero omnis
          
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          asperiores minima repellendus beatae iste, error tempora, atque
          facilis perferendis minus officiis. Iste voluptate ipsa libero omnis
          
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          asperiores minima repellendus beatae iste, error tempora, atque
          facilis perferendis minus officiis. Iste voluptate ipsa libero omnis
          
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          asperiores minima repellendus beatae iste, error tempora, atque
          facilis perferendis minus officiis. Iste voluptate ipsa libero omnis
          
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          asperiores minima repellendus beatae iste, error tempora, atque
          facilis perferendis minus officiis. Iste voluptate ipsa libero omnis
          
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          asperiores minima repellendus beatae iste, error tempora, atque
          facilis perferendis minus officiis. Iste voluptate ipsa libero omnis
          
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          asperiores minima repellendus beatae iste, error tempora, atque
          facilis perferendis minus officiis. Iste voluptate ipsa libero omnis
          
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          asperiores minima repellendus beatae iste, error tempora, atque
          facilis perferendis minus officiis. Iste voluptate ipsa libero omnis
          
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          asperiores minima repellendus beatae iste, error tempora, atque
          facilis perferendis minus officiis. Iste voluptate ipsa libero omnis
          
        </Text>
      </ScrollView>
    </View>
  );
}

export default Songlist;
