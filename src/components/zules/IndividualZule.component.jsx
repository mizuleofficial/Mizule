import { View, Pressable, Animated, ScrollView } from 'react-native';
import React, { useEffect, useRef } from 'react';
import Video from 'react-native-video';
import IndividualZuleDetails from './IndividualZuleDetails.component';
import { windowHeight, windowWidth } from '../../utils/constants.util';

const IndividualZule = ({ item, hideThumbnail, setHideThumbnail }) => {
	const opacityAnimation = useRef(new Animated.Value(1)).current;

	useEffect(() => {
		Animated.timing(opacityAnimation, {
			toValue: hideThumbnail ? 0 : 1,
			duration: 150,
			useNativeDriver: true
		}).start(() => {
			Animated.timing(opacityAnimation, {
				toValue: !hideThumbnail ? 0 : 1,
				duration: 150,
				useNativeDriver: true
			}).start();
		});
	}, [hideThumbnail]);

	if (!item) return;

	return (
		<View className='rounded-lg  justify-end relative'>
			<ScrollView className=''>
				<View
					style={{ paddingTop: windowHeight - 200 }}
					onPress={() => setHideThumbnail(!hideThumbnail)}
				>
					<View className='h-screen w-full absolute top-0 left-0'>
						<Pressable className='w-full h-full absolute z-10'>
							<Animated.Image
								source={{ uri: item.zuleThumbnail }}
								className={`w-full h-full absolute z-10 transition-opacity ${
									!hideThumbnail ? 'opacity-100' : 'opacity-0'
								}`}
								style={{ opacity: opacityAnimation }}
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
							paused={hideThumbnail}
						/>
					</View>
					<IndividualZuleDetails zule={item} />
				</View>
			</ScrollView>
		</View>
	);
};
export default IndividualZule;
