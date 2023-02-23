import { View, Text, Image, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import Carousel, { getInputRangeFromIndexes } from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';

import { windowHeight, windowWidth } from '../utils/constants.util';

const Zules = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [carouselItems, setCarouselItems] = useState([
		{
			title: 'Item 1',
			description:
				'njjknhj jkhkjnj kjhj jk hj hjv ghhg ghvghvhjbghv vghvbhvgh bvbhc ghhbhbu.',
			zuleTeaserThumbnail: '',
			zuleTeaserLink: 'https://wallpaperaccess.com/full/2713199.jpg',
			zuleThumbnail: 'https://wallpaperaccess.com/full/2713199.jpg',
			zuleLink: 'https://wallpaperaccess.com/full/2713199.jpg'
		},
		{
			title: 'Item 1',
			description:
				'njjknhj jkhkjnj kjhj jk hj hjv ghhg ghvghvhjbghv vghvbhvgh bvbhc ghhbhbu.',
			zuleTeaserThumbnail: '',
			zuleTeaserLink: 'https://wallpaperaccess.com/full/2713199.jpg',
			zuleThumbnail: 'https://wallpaperaccess.com/full/2713199.jpg',
			zuleLink: 'https://wallpaperaccess.com/full/2713199.jpg'
		},
		{
			title: 'Item 1',
			description:
				'njjknhj jkhkjnj kjhj jk hj hjv ghhg ghvghvhjbghv vghvbhvgh bvbhc ghhbhbu.',
			zuleTeaserThumbnail: '',
			zuleTeaserLink: 'https://wallpaperaccess.com/full/2713199.jpg',
			zuleThumbnail: 'https://wallpaperaccess.com/full/2713199.jpg',
			zuleLink: 'https://wallpaperaccess.com/full/2713199.jpg'
		}
	]);

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
			<ImageBackground
				source={{ uri: item.zuleThumbnail }}
				className='flex-1 rounded-lg overflow-hidden justify-end'
			>
				<LinearGradient
					colors={['transparent', '#000000']}
					className='pt-12 p-3'
				>
					<View>
						<Text className='text-xl font-black'>{item.title}</Text>
						<Text className='text-base'>{item.description}</Text>
					</View>
				</LinearGradient>
			</ImageBackground>
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
					layout={'stack'}
					scrollInterpolator={scrollInterpolator4}
					slideInterpolatedStyle={animatedStyles4}
				/>
			</View>
		</View>
	);
};

export default Zules;
