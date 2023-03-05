import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	ImageBackground
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const HorizontalCarousel = ({
	zules,
	title,
	itemWidth = 0,
	itemHeight = 0,
	itemStyle = {},
	hideTitle = false
}) => {
	if (!zules) return;
	return (
		<View className='flex-1 mb-4'>
			<View className='flex-row justify-between'>
				<Text className='text-gray-300 text-base font-medium pb-2 '>
					{title}
				</Text>
				<TouchableOpacity>
					<Text className='text-gray-300 font-medium pb-2'>View All</Text>
				</TouchableOpacity>
			</View>
			<ScrollView
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				overScrollMode='never'
			>
				{zules.map((zule, i) => {
					if (i >= 6) return;
					return (
						<ImageBackground
							className='bg-neutral-800 mr-3 rounded-lg overflow-hidden justify-end'
							style={[
								itemStyle,
								{
									width: itemWidth,
									height: itemHeight
								}
							]}
							source={{
								uri: zule.zuleThumbnail
							}}
							key={i}
						>
							{!hideTitle && (
								<LinearGradient
									colors={['#000', '#000000af', '#0000009f', 'transparent']}
									locations={[0, 0.4, 0.6, 1]}
									start={{ x: 0, y: 1 }}
									end={{ x: 0, y: 0 }}
									className='pt-3 px-2'
								>
									<Text className='font-black'>{zule.title}</Text>
								</LinearGradient>
							)}
						</ImageBackground>
					);
				})}
			</ScrollView>
		</View>
	);
};

export default HorizontalCarousel;
