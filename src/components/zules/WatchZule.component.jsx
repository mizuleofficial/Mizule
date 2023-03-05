import { Image, Text, View, Pressable, ScrollView } from "react-native";
import React from "react";
import Video from "react-native-video";
import Modal from "react-native-modal";
import { windowHeight, windowWidth } from "../../utils/constants.util";
import WhatsNewcard from "../Discover/WhatsNewcard";

// import { colorPicker } from '../../utils/colorPicker.util';

const WatchZule = ({
  zule,
  isWatchZuleDetailsOpen,
  setIsWatchZuleDetailsOpen,
}) => {
  // const [bgColor, setbgColor] = useState('#00000000');
  // const fetchBgColors = async () => {
  // 	let colors = await colorPicker(zule.zuleThumbnail);
  // 	setbgColor(colors.lightVibrant + '80');
  // };
  // fetchBgColors();
  if (!zule) return;
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
    <Modal
      isVisible={isWatchZuleDetailsOpen}
      onBackButtonPress={() => setIsWatchZuleDetailsOpen(false)}
      backdropColor="black"
      className="flex-1 m-0"
    >
      <View className="flex-1 bg-black">
        <Video
          source={{ uri: zule.fullZule }}
          style={{ width: windowWidth, height: windowWidth / (16 / 9) }}
          resizeMode="contain"
          muted
          controls={true}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="flex justify-start items-start p-5">
            <Text className="text-3xl font-extrabold pb-1 pr-20">
              {zule.title}
            </Text>

            <View style={{ flexDirection: "row" }}>
              {zule.category?.map((category, index) => (
                <Text className="text-base text-neutral-400" key={index}>
                  {category}
                  {zule.category.length - 1 !== index && " • "}
                </Text>
              ))}
            </View>
            <Text className="text-base text-neutral-400">
              {zule.CBFC_rating}
            </Text>
            <Text className="text-base text-neutral-400">
              {new Date(zule.created_at).getFullYear()}
            </Text>
            <View className="flex justify-center items-start ">
              <Text className=" text-neutral-400 text-2xl font-bold">
                Decription
              </Text>
              <Text className="mt-3 text-justify w-80 leading-4 text-xs">
                {zule.description} lorem fgiuagch byifgecbdu iugefhbvudjb
                ughdvusj uigevhiudgxb vdux jkvbveugdcakbj lorem fgiuagch
                byifgecbdu iugefhbvudjb ughdvusj uigevhiudgxb vduxj
                kvbveugdcakbj
              </Text>
            </View>
            <View>
              <Text className="text-left text-white text-xl font-semibold pl-1 py-3">
                What's New ? 😍
              </Text>
              <WhatsNewcard items={newZules} />
            </View>
            <View>
              <Text className="text-left text-white text-xl font-semibold pl-1 pb-3">
                Watch Your Favorites zules
              </Text>
              <WhatsNewcard items={newZules} />
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default WatchZule;
