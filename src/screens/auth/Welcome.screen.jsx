import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View className="flex-1 w-full items-center justify-center w- px-6 relative bg-black">
      <View className="flex  mb-10">
        <Image
          className="w-80  h-16"
          source={require("../../assets/logo.png")}
        />
      </View>
      <View className="w-[85vw]">
        <TouchableOpacity
          className="pt-2 pb-2"
          onPress={()=>navigation.navigate("SignUp")}
        >
          <View className="flex border border-gray-200 py-2 justify-center items-center bg-white rounded-md">
            <Text className="font-bold text-lg text-black">Sign Up </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          className="pt-2 pb-2"
          onPress={()=>navigation.navigate("SignIn")}
        >
          <View className="flex border border-gray-200 py-2 justify-center items-center bg-transparent rounded-md">
            <Text className="font-bold text-lg text-white">Sign In </Text>
          </View>
        </TouchableOpacity>
        <View className="flex flex-row w-full items-center justify-center my-4">
          <View className="h-[1px] w-[38vw] bg-zinc-700"></View>
          <Text className="flex justify-center items-center mx-2 font-extrabold">
            OR
          </Text>
          <View className="h-[1px] w-[37vw] bg-zinc-700"></View>
        </View>
        <TouchableOpacity className="pt-3 pb-5" >
          <View className="flex flex-row border border-zinc-700  py-2 justify-center items-center bg-transparent rounded-md">
            <Image
              className="w-7 h-7"
              source={require("../../assets/AuthImages/Google.png")}
            />

            <Text className="font-medium text-base py-1 pl-3 text-white">
              Continue with Google
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex flex-row border border-zinc-700  py-2 justify-center items-center bg-transparent rounded-md">
            <Image
              className="w-6 h-7"
              source={require("../../assets/AuthImages/Apple.png")}
            />

            <Text className=" font-medium text-base py-1 pl-3 text-white">
              Continue with Apple
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;
