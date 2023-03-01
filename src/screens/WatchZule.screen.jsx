import { View, Text, ImageBackground, ScrollView} from "react-native";
import ImageColors from 'react-native-image-colors'


import React from "react";

const WatchZule = async() => { 


const result = await ImageColors.getColors("https://i.pinimg.com/originals/aa/8d/a9/aa8da9413fe57e4e64ff50141ad77435.jpg", {
  fallback: '#000',
  cache: true,
  key: 'unique_key',
})
console.log(result.dominant);
  return (
    <View className="flex-1">

      <ImageBackground
        source={{
          uri: "https://i.pinimg.com/originals/aa/8d/a9/aa8da9413fe57e4e64ff50141ad77435.jpg",
        }}
        resizeMode="cover"
        className="flex-1"
      >
        <View className="p-5 absolute bottom-0 h-[60vh] w-full">
          <ScrollView>
            <View className="flex ">
              <Text className="text-white font-bold text-5xl whitespace-pre-wrap">
                Raya and the Dragon
              </Text>

              <View className="flex flex-row ">
                <Text className="text-orange-100 pr-2">2021</Text>
                <View className="w-[1px] h-5 bg-white "></View>
                <Text className="text-orange-100 pl-2">Disney+Hotstar</Text>
              </View>
              <View>
                <Text></Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WatchZule;
