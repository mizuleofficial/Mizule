import { Image, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { BlurView, VibrancyView } from '@react-native-community/blur';

import { colorPicker } from '../../utils/colorPicker.util';
import { windowHeight, windowWidth } from '../../utils/constants.util';

const IndividualZuleDetails = ({ zule }) => {
	const [bgColor, setbgColor] = useState('#00000000');
	const fetchBgColors = async () => {
		let colors = await colorPicker(zule.zuleThumbnail);
		setbgColor(colors.lightVibrant + '80');
	};
	fetchBgColors();

	return (
		<View>
			<BlurView
				style={{ width: windowWidth, height: windowHeight }}
				blurRadius={10}
			>
				<View className='flex-1'>
					<LinearGradient
						colors={[bgColor, bgColor, bgColor, 'transparent']}
						locations={[0, 0.5, 0.7, 1]}
						start={{ x: 0, y: 1 }}
						end={{ x: 0, y: 0 }}
						className='flex-1'
					>
						<View>
							<Text className='text-xl font-black text-white'>
								{zule.title}
							</Text>
							<Text className='text-base text-gray-200'>
								{zule.description}
							</Text>
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
									source={require('../../assets/Z-silver-png.png')}
									className='w-8 h-8'
								/>
							</Pressable>
						</View>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
						<Text>IndividualZuleDetails</Text>
					</LinearGradient>
				</View>
			</BlurView>
		</View>
	);
};

export default IndividualZuleDetails;
