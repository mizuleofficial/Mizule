import { View, Text, Image, ImageBackground } from 'react-native';
import React, { useState } from 'react';
// import Carousel from 'react-native-snap-carousel';
// import { windowHeight, windowWidth } from '../utils/constants.util';

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
	const _renderItem = ({ item, index }) => {
		return (
			<ImageBackground source={{ uri: item.zuleThumbnail }} className='flex-1'>
				<Text>{item.text}</Text>
				<Text style={{ fontSize: 30 }}>{item.title}</Text>
			</ImageBackground>
		);
	};
	return (
		// <View className='bg-black flex-1'>
		// 	<View className='border-b-2 border-gray-300 p-3 pb-2'>
		// 		<Image source={require('../assets/logo.png')} className='w-36 h-8' />
		// 	</View>
		// 	<View className='p-3 flex-1'>
		// 		<Carousel
		// 			ref={(ref) => (carousel = ref)}
		// 			data={carouselItems}
		// 			sliderWidth={windowWidth - 24}
		// 			renderItem={_renderItem}
		// 			onSnapToItem={(index) => setActiveIndex(index)}
		// 			layout={'tinder'}
		// 		/>
		// 	</View>
		// </View>
		<Text>Zules</Text>
	);
};

export default Zules;
