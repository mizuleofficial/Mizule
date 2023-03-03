import { View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getRandomZules } from '../axios/zule.axios';
import { base_url } from '../utils/constants.util';
import CircularNav from '../components/extras/CircularNav.component';
import SliderCarousel from '../components/extras/Carousel.component';
import IndividualZule from '../components/zules/IndividualZule.component';

const Zules = ({ navigation }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [hideThumbnail, setHideThumbnail] = useState(false);
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
			// cacheVideo(zules[0].zuleTeaser, user.token);
			// cacheVideo(zules[1].zuleTeaser, user.token);
			// getCachedVideo(zules[0].zuleTeaser).then((res) =>
			//     setCurrentPlayingTeaserPath(res)
			// );
			setRandomZules([...randomZules, ...zules]);
		});
	};

	useEffect(() => {
		console.log(randomZules[0]);
		fetchRandomZules(0);
		setHideThumbnail(false);
		setTimeout(() => {
			setHideThumbnail(true);
		}, 3000);
	}, [activeIndex]);

	return (
		<View className='bg-black flex-1'>
			<View className='flex-1 relative'>
				<SliderCarousel
					randomZules={randomZules}
					setActiveIndex={setActiveIndex}
				>
					{({ item, index }) => (
						<IndividualZule
							item={item}
							index={index}
							hideThumbnail={hideThumbnail}
							setHideThumbnail={setHideThumbnail}
						/>
					)}
				</SliderCarousel>
			</View>
			<CircularNav navigation={navigation} />
		</View>
	);
};

export default Zules;
