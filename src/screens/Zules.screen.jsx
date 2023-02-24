import { View, Text, Image, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import Carousel, { getInputRangeFromIndexes } from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';

import { windowHeight, windowWidth } from '../utils/constants.util';

const Zules = ({ navigation }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [hideThumbnail, setHideThumbnail] = useState(false);

	const [carouselItems, setCarouselItems] = useState([
		{
			title: 'Item 1',
			description:
				'njjknhj jkhkjnj kjhj jk hj hjv ghhg ghvghvhjbghv vghvbhvgh bvbhc ghhbhbu.',
			zuleTeaserThumbnail: '',
			zuleTeaserLink:
				'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4',
			zuleThumbnail: 'https://wallpaperaccess.com/full/2713199.jpg',
			zuleLink: 'https://wallpaperaccess.com/full/2713199.jpg'
		},
		{
			title: 'Item 1',
			description:
				'njjknhj jkhkjnj kjhj jk hj hjv ghhg ghvghvhjbghv vghvbhvgh bvbhc ghhbhbu.',
			zuleTeaserThumbnail: '',
			zuleTeaserLink:
				'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4',
			zuleThumbnail: 'https://wallpaperaccess.com/full/2713199.jpg',
			zuleLink: 'https://wallpaperaccess.com/full/2713199.jpg'
		},
		{
			title: 'Item 1',
			description:
				'njjknhj jkhkjnj kjhj jk hj hjv ghhg ghvghvhjbghv vghvbhvgh bvbhc ghhbhbu.',
			zuleTeaserThumbnail: '',
			zuleTeaserLink:
				'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4',
			zuleThumbnail: 'https://wallpaperaccess.com/full/2713199.jpg',
			zuleLink: 'https://wallpaperaccess.com/full/2713199.jpg'
		}
	]);

	useEffect(() => {
		console.log(activeIndex);

		setHideThumbnail(false);
		setTimeout(() => {
			setHideThumbnail(true);
		}, 3000);
	}, [activeIndex]);

	function scrollInterpolator4(index, carouselProps) {
		const range = [1, 0, -1];
		const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
		const outputRange = range;

		return { inputRange, outputRange };
	}
	function animatedStyles4(index, animatedValue, carouselProps) {
		return {
			zIndex: carouselProps.data.length - index,
			opacity: animatedValue.interpolate({
				inputRange: [-1, 0, 1],
				outputRange: [0.75, 1, 0.75],
				extrapolate: 'clamp'
			}),
			transform: [
				{
					perspective: 1000
				},
				{
					scale: animatedValue.interpolate({
						inputRange: [-1, 0, 1],
						outputRange: [0.65, 1, 0.65],
						extrapolate: 'clamp'
					})
				},
				{
					rotateX: animatedValue.interpolate({
						inputRange: [-1, 0, 1],
						outputRange: ['30deg', '0deg', '30deg'],
						extrapolate: 'clamp'
					})
				},
				{
					rotateY: animatedValue.interpolate({
						inputRange: [-1, 0, 1],
						outputRange: ['-30deg', '0deg', '30deg'],
						extrapolate: 'clamp'
					})
				}
			]
		};
	}

	const _renderItem = ({ item, index }) => {
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
					source={{ uri: item.zuleTeaserLink }} // Can be a URL or a local file.
					ref={(ref) => {}} // Store reference
					// onBuffer={this.onBuffer} // Callback when remote video is buffering
					// onError={this.videoError} // Callback when video cannot be loaded
					onEnd={() => setHideThumbnail(!hideThumbnail)}
					className='h-full'
					resizeMode='cover'
					paused={hideThumbnail ? false : true}
				/>
				<LinearGradient
					colors={['transparent', '#000000a9', '#000000']}
					start={{ x: 0, y: 1 }}
					end={{ x: 0, y: 0 }}
					locations={[0, 2,3]}
					className='h-24 absolute top-0 w-full z-20 flex-row justify-between items-end'
				></LinearGradient>
				<LinearGradient
					colors={['transparent', '#000000']}
					className='pt-12 p-3 absolute bottom-0 w-full z-20 flex-row justify-between items-end'
				>
					<View>
						<Text className='text-xl font-black text-white'>{item.title}</Text>
						<Text className='text-base text-gray-200'>{item.description}</Text>
					</View>
					<View className='justify-center items-center'>
						<View className='mb-2'>
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
						</View>
						<View className='mb-4'>
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
						</View>
						<Pressable onPress={() => navigation.navigate('WatchZule')}>
							<Image
								source={require('../assets/Z-silver-png.png')}
								className='w-8 h-8'
							/>
						</Pressable>
					</View>
				</LinearGradient>
			</View>
		);
	};
	return (
		<View className='bg-black flex-1'>
			<View className='p-3 pb-2 bg-opacity-40'>
				<Image source={require('../assets/logo.png')} className='w-36 h-8' />
			</View>
			<View className='p-3 py-5 pt-1 flex-1'>
				<Carousel
					ref={(ref) => (carousel = ref)}
					data={carouselItems}
					sliderWidth={windowWidth - 24}
					itemWidth={windowWidth - 24}
					renderItem={_renderItem}
					onSnapToItem={(index) => setActiveIndex(index)}
					scrollInterpolator={scrollInterpolator4}
					slideInterpolatedStyle={animatedStyles4}
					layoutCardOffset={0}
					activeSlideOffset={0}
				/>
			</View>
		</View>
	);
};

export default Zules;