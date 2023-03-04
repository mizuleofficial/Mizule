import { Image, Text, View, Pressable } from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import Modal from 'react-native-modal';
import { windowWidth } from '../../utils/constants.util';

// import { colorPicker } from '../../utils/colorPicker.util';

const WatchZule = ({
	zule,
	isWatchZuleDetailsOpen,
	setIsWatchZuleDetailsOpen
}) => {
	console.log(zule);
	// const [bgColor, setbgColor] = useState('#00000000');
	// const fetchBgColors = async () => {
	// 	let colors = await colorPicker(zule.zuleThumbnail);
	// 	setbgColor(colors.lightVibrant + '80');
	// };
	// fetchBgColors();
	if (!zule) return;

	return (
		<Modal
			isVisible={isWatchZuleDetailsOpen}
			onBackButtonPress={() => setIsWatchZuleDetailsOpen(false)}
			backdropColor='black'
			className='flex-1 m-0'
		>
			<View className='flex-1 bg-black'>
				<Video
					source={{ uri: zule.fullZule }}
					style={{ width: windowWidth, height: windowWidth / (16 / 9) }}
					resizeMode='contain'
					muted
					controls={true}
				/>
				<View className='flex-row flex-1'>
					<Image
						source={{ uri: zule.zuleThumbnail }}
						style={{ width: 70, height: 70 * (16 / 9) }}
					/>
					<View>
						<Text>{zule.title}</Text>
						<View style={{ flexDirection: 'row' }}>
							{zule.category?.map((category, index) => (
								<Text key={index}>
									{category}
									{zule.category.length - 1 !== index && ' • '}
								</Text>
							))}
						</View>
						<Text>{zule.CBFC_rating}</Text>
						<Text>{new Date(zule.created_at).getFullYear()}</Text>
					</View>
				</View>
				<Text className='mt-3'>{zule.description}</Text>
			</View>
		</Modal>
	);
};

export default WatchZule;
