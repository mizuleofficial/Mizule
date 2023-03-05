import { View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import GestureRecognizer from 'react-native-swipe-gestures';

import { getRandomZules } from '../axios/zule.axios';
import { base_url, windowWidth } from '../utils/constants.util';
import CircularNav from '../components/extras/CircularNav.component';
import SliderCarousel from '../components/extras/Carousel.component';
import IndividualZule from '../components/zules/IndividualZule.component';
import WatchZule from '../components/zules/WatchZule.component';
import { cacheContent, getCachedContent } from '../utils/cacheContent.util';

const Zules = ({ navigation }) => {
	const [isWatchZuleDetailsOpen, setIsWatchZuleDetailsOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const [randomZules, setRandomZules] = useState([]);


	const { user } = useSelector((state) => ({ ...state }));

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
			// cacheContent(zules[0].zuleTeaser, user.token);
			cacheContent(zules[0].zuleThumbnail, user.token);
			// cacheContent(zules[1].zuleTeaser, user.token);
			cacheContent(zules[1].zuleThumbnail, user.token);
			// getCachedContent(zules[0].zuleTeaser).then((res) => {
			// 	setCurrentlyPlayingTeaser(res);
			// });
			// getCachedContent(zules[0].zuleTeaser).then((res) => {
			// 	setCurrentlyZuleThumbnail(res);
			// });
			setRandomZules([...randomZules, ...zules]);
		});
	};

	useEffect(() => {
		fetchRandomZules(0);
	}, []);

	return (
		<View className='bg-black flex-1'>
			<SliderCarousel
				items={randomZules}
				setActiveIndex={setActiveIndex}
				layout='default'
				itemWidth={windowWidth}
				sliderWidth={windowWidth}
			>
				{({ item, index }) => (
					<GestureRecognizer
						onSwipeUp={() => setIsWatchZuleDetailsOpen(true)}
						className='flex-1'
					>
						<IndividualZule
							zule={item}
							index={index}
							// currentlyPlayingTeaser={currentlyPlayingTeaser}
							// setCurrentlyPlayingTeaser={setCurrentlyPlayingTeaser}
							// currentlyZuleThumbnail={currentlyZuleThumbnail}
							// setCurrentlyZuleThumbnail={setCurrentlyZuleThumbnail}
							activeIndex={activeIndex}
							randomZules={randomZules}
						/>
					</GestureRecognizer>
				)}
			</SliderCarousel>
			<WatchZule
				zule={randomZules[activeIndex]}
				isWatchZuleDetailsOpen={isWatchZuleDetailsOpen}
				setIsWatchZuleDetailsOpen={setIsWatchZuleDetailsOpen}
			/>
			<CircularNav navigation={navigation} />
		</View>
	);
};

export default Zules;
