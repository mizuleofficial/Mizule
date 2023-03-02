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

import { getRandomZules } from '../axios/zule.axios';
import SliderCarousel from "../components/extras/Carousel.component";


const Profile = () => {
  const [cardType, setcardType] = useState("History");
  const types = ["History", "Liked Zules", "WatchLater", "Downloads"];
  const [randomZules, setRandomZules] = useState([]);

	const fetchRandomZules = async (zuleOffset) => {
		// , user && user.token
		getRandomZules(zuleOffset).then((res) => {
			if (!res.data.length) return;
			const zules = res.data.map((zule) => {
				const zuleTeaser = `${base_url}/zules/${zule.id_zuleSpot}/g2pc28g0l9vgb/${zule.id_zule}-teaser.mp4`;
				const fullZule = `${base_url}/zules/${zule.id_zuleSpot}/g2pc28g0l9vgb/${zule.id_zule}-zule.mp4`;
				const zuleThumbnail = `${base_url}/zules/${zule.id_zuleSpot}/g2pc28g0l9vgb/${zule.id_zule}-thumbnail.jpg`;
				return { ...zule, zuleTeaser, fullZule, zuleThumbnail };
			});
			// cacheVideo(zules[0].zuleTeaser, user.token);
			// cacheVideo(zules[1].zuleTeaser, user.token);
			// getCachedVideo(zules[0].zuleTeaser).then((res) =>
			//     setCurrentPlayingTeaserPath(res)
			// );
			setRandomZules([...randomZules, ...zules]);
		});
	};
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
            <TouchableOpacity onPress={()=>setcardType(item)}>
              <Text key={key} className="text-base font-bold pl-6  pr-3 ">
                {" "}
                {item}
              </Text>
            </TouchableOpacity>
          ))}
          
        </ScrollView>
       
      </View>
      <SliderCarousel randomZules={randomZules}>
       {({ item, index }) => {
						return (
							<View className='flex-1 rounded-lg overflow-hidden justify-end relative'>
								<Pressable
									onPress={() => setHideThumbnail(!hideThumbnail)}
									className='w-full h-full absolute z-10'
								>
									<Image
										source={{ uri: item.zuleThumbnail }}
										className={`w-full h-full absolute z-10 ${
											!hideThumbnail ? 'opacity-100' : 'opacity-0'
										}`}
									/>
								</Pressable>
								<Video
									source={{ uri: item.zuleTeaser }} // Can be a URL or a local file.
									ref={(ref) => {}} // Store reference
									// onBuffer={this.onBuffer} // Callback when remote video is buffering
									// onError={this.videoError} // Callback when video cannot be loaded
									onEnd={() => setHideThumbnail(!hideThumbnail)}
									className='h-full'
									resizeMode='cover'
									paused={!hideThumbnail}
								/>
								<LinearGradient
									colors={['transparent', '#000000']}
									className='pt-12 p-3 absolute bottom-0 w-full z-20 flex-row justify-between items-end'
								>
									<View>
										<Text className='text-xl font-black text-white'>
											{item.title}
										</Text>
										<Text className='text-base text-gray-200'>
											{item.description}
										</Text>
									</View>
									
								</LinearGradient>
							</View>
						);
					}}
       </SliderCarousel>
    </View>
  );
};

export default Profile;
