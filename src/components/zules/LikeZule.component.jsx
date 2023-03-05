import { TouchableOpacity, Image, Text } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';

import { likeZule } from '../../axios/zule.axios';
import { likeZuleTeaser } from '../../redux/reducers/zules/zules.slice';

const LikeZule = ({ zule, user, activeIndex }) => {
	const dispatch = useDispatch();

	if (!zule) return;
	return (
		<TouchableOpacity
			className='items-center'
			onPress={async () =>
				await likeZule(user.id_user, zule.id_zule).then((res) => {
					if (res.data === 'ok') {
						dispatch(
							likeZuleTeaser({
								id_user: user.id_user,
								id_zule: zule.id_zule,
								activeIndex
							})
						);
					}
				})
			}
		>
			{zule.reviews.likes.includes(user.id_user) ? (
				<Image
					source={{
						uri: 'https://img.icons8.com/ios-filled/50/ff0000/hearts.png'
					}}
					className='w-8 h-8'
				/>
			) : (
				<Image
					source={{
						uri: 'https://img.icons8.com/ios/50/ffffff/hearts--v1.png'
					}}
					className='w-7 h-7'
				/>
			)}
			<Text className='-translate-y-1'>{zule.reviews.likes.length}</Text>
		</TouchableOpacity>
	);
};

export default LikeZule;
