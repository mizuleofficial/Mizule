import { View, Text, Image } from "react-native";
import React from "react";
import { windowHeight, windowWidth } from "../../utils/constants.util";

const ProfileCarousel = ({}) => {
  return (
    <View className="flex  justify-center items-center pt-12 ">
      <View className="flex justify-center items-center bg-white">
        <View className="flex justify-center items-center ">
          <Image
            className="w-80 h-64"
            source={{
              uri: "https://wallpapers.com/images/high/aesthetic-youtube-blurred-city-lights-x0y2bnflvqpf2d2r.webp",
            }}
          />
        </View>
        <View className="w-80 h-64">
          <Text>Zule 1</Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            dolor perferendis,
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileCarousel;
