import {
  View,
  TextInput,
  Image,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import WhatsNewcard from "../components/Discover/WhatsNewcard";
import CircularNav from "../components/extras/CircularNav.component";
import SliderCarousel from "../components/extras/Carousel.component";
import { windowHeight, windowWidth } from "../utils/constants.util";
import ProfileCarousel from "../components/ProfileCarousel/profileCarousel";

const Discover = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Thriller",
    },
    {
      title: "Love",
    },
    {
      title: "Comedy",
    },
    {
      title: "Music",
    },
    {
      title: "Entertainment",
    },
  ];
  const followedZulists = [
    {
      name: "Hello",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp4KGr_kEojkAR-xU4eOJIsZ7u_4orOP8VZfF2EQY&s",
    },
    {
      name: "Hello",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp4KGr_kEojkAR-xU4eOJIsZ7u_4orOP8VZfF2EQY&s",
    },
    {
      name: "Hello",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp4KGr_kEojkAR-xU4eOJIsZ7u_4orOP8VZfF2EQY&s",
    },
    {
      name: "Hello",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp4KGr_kEojkAR-xU4eOJIsZ7u_4orOP8VZfF2EQY&s",
    },
    {
      name: "Hello",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp4KGr_kEojkAR-xU4eOJIsZ7u_4orOP8VZfF2EQY&s",
    },
    {
      name: "Hello",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp4KGr_kEojkAR-xU4eOJIsZ7u_4orOP8VZfF2EQY&s",
    },
    {
      name: "Hello",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp4KGr_kEojkAR-xU4eOJIsZ7u_4orOP8VZfF2EQY&s",
    },
    {
      name: "Hello",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp4KGr_kEojkAR-xU4eOJIsZ7u_4orOP8VZfF2EQY&s",
    },
    {
      name: "Hello",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp4KGr_kEojkAR-xU4eOJIsZ7u_4orOP8VZfF2EQY&s",
    },
    {
      name: "Hello",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp4KGr_kEojkAR-xU4eOJIsZ7u_4orOP8VZfF2EQY&s",
    },
    {
      name: "Hello",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp4KGr_kEojkAR-xU4eOJIsZ7u_4orOP8VZfF2EQY&s",
    },
    {
      name: "Hello",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp4KGr_kEojkAR-xU4eOJIsZ7u_4orOP8VZfF2EQY&s",
    },
    {
      name: "Hello",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp4KGr_kEojkAR-xU4eOJIsZ7u_4orOP8VZfF2EQY&s",
    },
  ];
  const newZules = [
    {
      title: "Coral Reef",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
    },
    {
      title: "Coral Reef",
      url: "https://images.unsplash.com/photo-1633205719979-e47958ff6d93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    },
    {
      title: "Coral Reef",
      url: "https://images.unsplash.com/photo-1633205719979-e47958ff6d93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    },
    {
      title: "Coral Reef",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
    },
    {
      title: "Coral Reef",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
    },
  ];

  return (
    <View className="flex-1 w-full bg-black justify-start items-center p-4 ">
      <View className=" w-[90vw]">
        <View className="flex flex-row justify-start items-center bg-stone-800 rounded-lg pl-3">
          <Image
            className="w-5 h-5 "
            source={require("../assets/search.png")}
          />

          <TextInput
            className=" font-normal text-xs placeholder:text-xs h-9  pl-2 text-white "
            placeholder="Discover your favorite Zules "
            onChangeText={(e) => setQuery(e)}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <View>
          {/* <Text className="text-white ">{JSON.stringify(items)}</Text> */}
          {items && items.length < 0 ? (
            <Text className="flex justify-center items-center text-white">
              No Tags
            </Text>
          ) : (
            <View className="flex flex-row py-4 ">
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View className="bg-white  rounded-xl px-3 py-1 mx-1">
                  <Text className="text-base text-black">All</Text>
                </View>
                {items &&
                  items.map((item) => {
                    return (
                      <View className="bg-stone-800  rounded-lg px-3 py-1 mx-1">
                        <Text className="text-base text-white">
                          {item.title}
                        </Text>
                      </View>
                    );
                  })}
              </ScrollView>
            </View>
          )}
        </View>
        <View>
          <View className="flex flex-row pb-3 justify-between items-end">
            <Text className="text-left text-white text-xl font-semibold pl-1 pt-2">
              Followed zulist
            </Text>
            <TouchableOpacity>
              {followedZulists && followedZulists.length > 10 && (
                <Text className="text-white pb-1">view All</Text>
              )}
            </TouchableOpacity>
          </View>
          {/* <Text className="text-white ">{JSON.stringify(followedZulists)}</Text> */}
          {followedZulists && followedZulists.length < 0 ? (
            <Text className="flex justify-center items-center text-white">
              No Tags
            </Text>
          ) : (
            <View className="flex flex-row justify-start items-start w-full pb-3">
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {followedZulists &&
                  followedZulists.map((followedZulist, i) => {
                    if (i >= 10) return;
                    return (
                      <View className="flex justify-center items-center">
                        <ImageBackground
                          className=" rounded-lg mx-2 w-16 h-16 overflow-hidden"
                          source={{
                            uri: followedZulist.img,
                          }}
                        ></ImageBackground>
                      </View>
                    );
                  })}
              </ScrollView>
            </View>
          )}
        </View>
        <View>
          <Text className="text-left text-white text-xl font-semibold pl-1 py-3">
            What's New ? 😍
          </Text>
          <WhatsNewcard items={newZules} />
        </View>
        <View>
          <Text className="text-left text-white text-xl font-semibold pl-1 py-2">
            Categories
          </Text>
          <SliderCarousel
            items={newZules}
            setActiveIndex={setActiveIndex}
            layout="default"
            itemWidth={400}
            sliderWidth={windowWidth}
          >
            {({ item, index }) => {
              return <ProfileCarousel item={item} />;
            }}
          </SliderCarousel>
        </View>
      </View>
      <CircularNav navigation={navigation} />
    </View>
  );
};

export default Discover;
