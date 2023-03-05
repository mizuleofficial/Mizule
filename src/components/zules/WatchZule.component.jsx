import { Image, Text, View, Pressable, ScrollView } from "react-native";
import React from "react";
import Video from "react-native-video";
import Modal from "react-native-modal";
import { windowHeight, windowWidth } from "../../utils/constants.util";

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
					resizeMode='contain'
					muted
					controls={true}
				/>
        <View className="flex-row flex-1 relative justify-start items-end bg-black bg-opacity-10">
          <View className="flex justify-end items-start absolute p-10">
            <ScrollView>
              <View className="flex flex-row justify-between items-center">
                <Text className="text-3xl font-extrabold pb-1 pr-20">
                  {zule.title}
                </Text>
                <View className="flex justify-center items-center pb-1">
                  {false ? (
                    <Image
                      source={{
                        uri: "https://img.icons8.com/ios/50/ffffff/video-playlist.png",
                      }}
                      className="w-9 h-9"
                    />
                  ) : (
                    <Image
                      source={{
                        uri: "https://img.icons8.com/ios-filled/50/ffffff/video-playlist.png",
                      }}
                      className="w-8 h-8"
                    />
                  )}
                </View>
              </View>
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
                <Text className="mt-3 text-justify w-72">
                  {zule.description} lorem fgiuagch byifgecbdu iugefhbvudjb
                  ughdvusj uigevhiudgxb vdux jkvbveugdcakbj lorem fgiuagch
                  byifgecbdu iugefhbvudjb ughdvusj uigevhiudgxb vduxj
                  kvbveugdcakbj
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default WatchZule;
