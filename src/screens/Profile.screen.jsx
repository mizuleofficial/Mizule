import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { windowHeight, windowWidth } from "../utils/constants.util";

import { getRandomZules } from "../axios/zule.axios";
import SliderCarousel from "../components/extras/Carousel.component";
import ProfileCarousel from "../components/ProfileCarousel/profileCarousel";

const Profile = () => {
  const [cardType, setCardType] = useState("History");
  const types = ["History", "Liked Zules", "WatchLater", "Downloads"];
  const LikedZules = [
    {
      img: "nghngf",
    },
  ];
  return (
    <View className="flex-1 bg-black p-5">
      <View className="flex flex-row justify-between items-center ">
        <View className="bg-opacity-40">
          <Image source={require("../assets/logo.png")} className="w-36 h-8" />
        </View>
        <View
          className="flex flex-row justify-around"
          style={{ width: windowWidth / 5 }}
        >
          <TouchableOpacity>
            <Image
              className="w-5 h-5"
              source={require("../assets/Notification.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              className="w-5 h-5 pr-3"
              source={require("../assets/Setting.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text className="font-medium text-2xl pt-7 pb-1 ">Hello Bhuvana!!😉</Text>
      <Text className="text-zinc-500">Have a great day!!!</Text>

      <View className="flex flex-row justify-between items-center pt-6 pb-6">
        <ImageBackground
          className=" rounded-3xl w-20 h-20 overflow-hidden"
          source={{
            uri: "https://cdn.shopify.com/s/files/1/0850/2114/files/tips_to_help_heighten_senses_480x480.png?v=1624399167",
          }}
        ></ImageBackground>
        <View
          className="flex justify-center  bg-slate-100 rounded-xl "
          style={{ width: windowWidth / 2 }}
        >
          <Text className="flex py-2 px-3 text-base font-medium text-center text-black">
            Create Your ZuleStudio
          </Text>
        </View>
      </View>
      <View
        className="flex flex-row justify-center items-center bg-zinc-800 rounded-xl"
        style={{ width: windowWidth - 40, height: windowHeight / 15 }}
      >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {types.map((item, key) => (
            <TouchableOpacity onPress={() => setCardType(item)}>
              <Text key={key} className="text-base font-bold pl-6  pr-3 ">
                {" "}
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <SliderCarousel randomZules={LikedZules}>
        {({ item, index }) => {
          return <ProfileCarousel item={item} />;
        }}
      </SliderCarousel>
    </View>
  );
};

export default Profile;
