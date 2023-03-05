import { View, Animated, Image, Pressable } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Video from 'react-native-video';
import { useSelector, useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import { cacheContent, getCachedContent } from '../../utils/cacheContent.util';
import IndividualZuleInfo from './IndividualZuleInfo.component';
import { fetchZules } from '../../redux/reducers/zules/zules.slice';

const IndividualZule = ({ zule, activeIndex, fetchRandomZules }) => {
	const opacityAnimation = useRef(new Animated.Value(1)).current;
	const [hideThumbnail, setHideThumbnail] = useState(false);
	const [currentlyPlayingTeaser, setCurrentlyPlayingTeaser] = useState('');
	// const [currentlyZuleThumbnail, setCurrentlyZuleThumbnail] = useState('');
	const dispatch = useDispatch();

	const { user, zules } = useSelector((state) => ({ ...state }));

	useEffect(() => {
		setHideThumbnail(false);
		if (activeIndex + 2 == zules.length - 1) {
			fetchRandomZules(activeIndex + 1).then((zules) =>
				dispatch(fetchZules(zules))
			);
		}
		if (activeIndex <= zules.length - 3) {
			cacheContent(zules[activeIndex + 1].zuleTeaser, user.token);
			// cacheContent(zules[activeIndex + 1].zuleThumbnail, user.token);
			cacheContent(zules[activeIndex + 2].zuleTeaser, user.token);
			// cacheContent(zules[activeIndex + 2].zuleThumbnail, user.token);
		}
		zules[activeIndex] &&
			getCachedContent(zules[activeIndex].zuleTeaser).then((res) =>
				setCurrentlyPlayingTeaser(res)
			);
		// randomZules[activeIndex] &&
		// 	getCachedContent(randomZules[activeIndex].zuleThumbnail).then((res) =>
		// 		setCurrentlyZuleThumbnail(res)
		// 	);
		setTimeout(() => {
			setHideThumbnail(true);
		}, 3000);
	}, [activeIndex]);
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

	if (!zule) return;

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
					{!hideThumbnail && (
						<Image
							source={{
								uri: zule.zuleThumbnail
							}}
							className={`w-full h-full transition-opacity`}
						/>
					)}
					<Video
						source={{
							uri: currentlyPlayingTeaser
								? currentlyPlayingTeaser
								: zule.zuleTeaser
						}} // Can be a URL or a local file.
						// ref={(ref) => {}} // Store reference
						// onBuffer={this.onBuffer} // Callback when remote video is buffering
						// onError={this.videoError} // Callback when video cannot be loaded
						onEnd={() => setHideThumbnail(false)}
						className='h-full w-full'
						resizeMode='cover'
						paused={!hideThumbnail}
					/>
				</Pressable>
			</View>
			<IndividualZuleInfo zule={zule} user={user} activeIndex={activeIndex} />
		</View>
	);
};

export default IndividualZule;
