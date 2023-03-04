import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { windowHeight, windowWidth } from "../../utils/constants.util";

const WhatsNewcard = ({ items }) => {
  return (
    <View className="flex flex-row justify-start items-start w-full pb-4">
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {items &&
          items.map((item, i) => {
            if (i >= 10) return;
            return (
              <View
                className=" bg-neutral-800 mx-2 rounded-xl"
                style={{ width: windowWidth / 3, height: windowHeight / 6 }}
              >
                <Image
                  className="rounded-t-xl"
                  style={{ width: windowWidth / 3, height: windowHeight / 9 }}
                  source={{
                    uri: item.url,
                  }}
                />
                <Text className="text-zinc-300 text-base font-medium text-center pt-2">
                  {item.title}
                </Text>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default WhatsNewcard;
