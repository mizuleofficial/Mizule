import { View, Pressable, Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const IndividualZuleInfo = ({ zule }) => {
	return (
		<LinearGradient
			colors={['#000', '#000000af', '#0000009f', 'transparent']}
			locations={[0, 0.5, 0.7, 1]}
			start={{ x: 0, y: 1 }}
			end={{ x: 0, y: 0 }}
			className='w-full h-32 absolute bottom-0'
		>
			<View>
				<Text className='text-xl font-black text-white'>{zule.title}</Text>
				<Text className='text-base text-gray-200'>{zule.description}</Text>
			</View>
			<View className='justify-center items-center flex-row'>
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
			</View>
		</LinearGradient>
	);
};

export default IndividualZuleInfo;
