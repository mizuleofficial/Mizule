import {
	View,
	Pressable,
	Animated,
	ScrollView,
	Image,
	Text
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';

import IndividualZuleInfo from './IndividualZuleInfo.component';

const IndividualZule = ({ item, hideThumbnail, setHideThumbnail }) => {
	const opacityAnimation = useRef(new Animated.Value(1)).current;
	const scrollA = useRef(new Animated.Value(0)).current;
	const [scrollY, setScrollY] = useState(0);
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
		<View className='flex-1'>
			<LinearGradient
				colors={['#000000', '#000000bd', '#0000008d', 'transparent']}
				locations={[0, 0.5, 0.7, 1]}
				start={{ x: 0, y: 0 }}
				end={{ x: 0, y: 1 }}
				className='bg-opacity-40 absolute top-0 left-0 z-10 w-full p-3 pb-12 flex-1'
			>
				<Image source={require('../../assets/logo.png')} className='w-36 h-8' />
			</LinearGradient>
			<View className='h-screen w-full relative'>
				<Pressable
					className='w-full h-full'
					onPress={() => setHideThumbnail(!hideThumbnail)}
				>
					<Animated.Image
						source={{ uri: item.zuleThumbnail }}
						className={`w-full h-full transition-opacity ${
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
					className='h-full w-full'
					resizeMode='cover'
					paused={hideThumbnail}
				/>
			</View>
			<IndividualZuleInfo zule={item} />
		</View>
	);
};

export default IndividualZule;
