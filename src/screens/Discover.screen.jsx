import {
	View,
	TextInput,
	Image,
	Text,
	ScrollView,
	ImageBackground,
	TouchableOpacity
} from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import CircularNav from '../components/extras/CircularNav.component';
import HorizontalCarousel from '../components/extras/HorizontalCarousel.component';
import { windowWidth } from '../utils/constants.util';

const Discover = ({ navigation }) => {
	const { zules } = useSelector((state) => ({ ...state }));

	const [query, setQuery] = useState('');
	const items = [
		{
			title: 'Thriller'
		},
		{
			title: 'Love'
		},
		{
			title: 'Comedy'
		},
		{
			title: 'Music'
		},
		{
			title: 'Entertainment'
		}
	];
	const followedZulists = [
		{
			name: 'Hello',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp4KGr_kEojkAR-xU4eOJIsZ7u_4orOP8VZfF2EQY&s'
		},
		{
			name: 'Hello',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp4KGr_kEojkAR-xU4eOJIsZ7u_4orOP8VZfF2EQY&s'
		},
		{
			name: 'Hello',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp4KGr_kEojkAR-xU4eOJIsZ7u_4orOP8VZfF2EQY&s'
		},
		{
			name: 'Hello',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp4KGr_kEojkAR-xU4eOJIsZ7u_4orOP8VZfF2EQY&s'
		},
		{
			name: 'Hello',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp4KGr_kEojkAR-xU4eOJIsZ7u_4orOP8VZfF2EQY&s'
		},
		{
			name: 'Hello',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp4KGr_kEojkAR-xU4eOJIsZ7u_4orOP8VZfF2EQY&s'
		},
		{
			name: 'Hello',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp4KGr_kEojkAR-xU4eOJIsZ7u_4orOP8VZfF2EQY&s'
		},
		{
			name: 'Hello',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp4KGr_kEojkAR-xU4eOJIsZ7u_4orOP8VZfF2EQY&s'
		},
		{
			name: 'Hello',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp4KGr_kEojkAR-xU4eOJIsZ7u_4orOP8VZfF2EQY&s'
		},
		{
			name: 'Hello',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp4KGr_kEojkAR-xU4eOJIsZ7u_4orOP8VZfF2EQY&s'
		},
		{
			name: 'Hello',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp4KGr_kEojkAR-xU4eOJIsZ7u_4orOP8VZfF2EQY&s'
		},
		{
			name: 'Hello',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp4KGr_kEojkAR-xU4eOJIsZ7u_4orOP8VZfF2EQY&s'
		},
		{
			name: 'Hello',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp4KGr_kEojkAR-xU4eOJIsZ7u_4orOP8VZfF2EQY&s'
		}
	];
	const newZules = [
		{
			title: 'Coral Reef',
			url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png'
		},
		{
			title: 'Coral Reef',
			url: 'https://images.unsplash.com/photo-1633205719979-e47958ff6d93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'
		},
		{
			title: 'Coral Reef',
			url: 'https://images.unsplash.com/photo-1633205719979-e47958ff6d93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'
		},
		{
			title: 'Coral Reef',
			url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png'
		},
		{
			title: 'Coral Reef',
			url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png'
		}
	];

	return (
		<View className='flex-1 w-full bg-black justify-start items-center p-4 '>
			<View className='flex flex-row justify-start items-center bg-stone-800 rounded-lg pl-3 w-full'>
				<Image className='w-5 h-5 ' source={require('../assets/search.png')} />

				<TextInput
					className=' font-normal text-xs placeholder:text-xs h-9  pl-2 text-white '
					placeholder='Discover your favorite Zules '
					onChangeText={(e) => setQuery(e)}
					autoCapitalize='none'
					autoCorrect={false}
				/>
			</View>

			<View>
				{items && items.length < 0 ? (
					<Text className='flex justify-center items-center text-white'>
						No Tags
					</Text>
				) : (
					<View className='flex flex-row py-4 '>
						<ScrollView
							horizontal={true}
							showsHorizontalScrollIndicator={false}
						>
							<View className='bg-white  rounded-xl px-3 py-1 mx-1'>
								<Text className='text-base text-black'>All</Text>
							</View>
							{items &&
								items.map((item, i) => {
									return (
										<View
											className='bg-stone-800  rounded-lg px-3 py-1 mx-1'
											key={i}
										>
											<Text className='text-base text-white'>{item.title}</Text>
										</View>
									);
								})}
						</ScrollView>
					</View>
				)}
			</View>
			<View>
				<ScrollView overScrollMode='never' showsVerticalScrollIndicator={false}>
					<HorizontalCarousel
						zules={zules}
						hideTitle={true}
						title='Follower Zule Spots'
						itemWidth={64}
						itemHeight={64}
					/>
					<HorizontalCarousel
						zules={zules}
						title='Trending'
						itemWidth={windowWidth / 3.5}
						itemHeight={windowWidth / 3.5 / (9 / 16)}
					/>
					<HorizontalCarousel
						zules={zules}
						title='Trending'
						itemWidth={windowWidth / 3.5}
						itemHeight={windowWidth / 3.5 / (9 / 16)}
					/>
					<HorizontalCarousel
						zules={zules}
						title='Trending'
						itemWidth={windowWidth / 3.5}
						itemHeight={windowWidth / 3.5 / (9 / 16)}
					/>
					<HorizontalCarousel
						zules={zules}
						title='Trending'
						itemWidth={windowWidth / 3.5}
						itemHeight={windowWidth / 3.5 / (9 / 16)}
					/>
				</ScrollView>
			</View>
			<CircularNav navigation={navigation} />
		</View>
	);
};

export default Discover;
