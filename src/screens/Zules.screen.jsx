import { View, Text, Image, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';

import { getRandomZules } from '../axios/zule.axios';
import { base_url } from '../utils/constants.util';
import CircularNav from '../components/extras/CircularNav.component';
import SliderCarousel from '../components/extras/Carousel.component';

const Zules = ({ navigation }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [hideThumbnail, setHideThumbnail] = useState(false);
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

	useEffect(() => {
		fetchRandomZules(0);
		setHideThumbnail(false);
		setTimeout(() => {
			setHideThumbnail(true);
		}, 3000);
	}, [activeIndex]);

	return (
		<View className='bg-black flex-1'>
			<LinearGradient
				colors={['#000000', '#000000bd', '#0000008d', 'transparent']}
				locations={[0, 0.5, 0.7, 1]}
				start={{ x: 0, y: 0 }}
				end={{ x: 0, y: 1 }}
				className='bg-opacity-40 absolute top-0 left-0 z-10 w-full p-3 pb-12'
			>
				<Image source={require('../assets/logo.png')} className='w-36 h-8' />
			</LinearGradient>
			<View className='flex-1'>
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
									<View className='justify-center items-center'>
										{/* <View className='mb-2'>
							{false ? (
								<Image
									source={{
										uri: 'https://img.icons8.com/ios/50/ffffff/hearts--v1.png'
									}}
									className='w-8 h-8'
								/>
							) : (
								<Image
									source={{
										uri: 'https://img.icons8.com/ios-filled/50/ff0000/hearts.png'
									}}
									className='w-9 h-9'
								/>
							)}
						</View> */}
										{/* <View className='mb-4'>
							{false ? (
								<Image
									source={{
										uri: 'https://img.icons8.com/ios/50/ffffff/video-playlist.png'
									}}
									className='w-9 h-9'
								/>
							) : (
								<Image
									source={{
										uri: 'https://img.icons8.com/ios-filled/50/ffffff/video-playlist.png'
									}}
									className='w-8 h-8'
								/>
							)}
						</View> */}
										{/* <Pressable onPress={() => navigation.navigate('WatchZule')}>
							<Image
								source={require('../assets/Z-silver-png.png')}
								className='w-8 h-8'
							/>
						</Pressable>*/}
									</View>
								</LinearGradient>
							</View>
						);
					}}
				</SliderCarousel>
			</View>
			<CircularNav navigation={navigation} />
		</View>
	);
};

export default Zules;
