import {
	View,
	Text,
	ImageBackground,
	Image,
	TouchableOpacity,
	ScrollView
} from 'react-native';
import React, { useState } from 'react';
import { windowHeight, windowWidth } from '../utils/constants.util';
// import Modal from "react-native-modal";
// import SliderCarousel from '../components/extras/Carousel.component';
import CircularNav from '../components/extras/CircularNav.component';
// import ProfileCarousel from "../components/ProfileCarousel/profileCarousel";

const Profile = ({ navigation }) => {
	const [cardType, setCardType] = useState('History');
	const types = ['History', 'Liked Zules', 'WatchLater', 'Downloads'];
	const LikedZules = [
		{
		  title: "Coral Reef",
		  description: "Location: Red Sea",
		  source:
			"https://images.unsplash.com/photo-1633205719979-e47958ff6d93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
		},
		{
		  title: "Phone",
		  description: "iPhone 6 on the table",
		  source:
			"https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
		},
	  
		{
		  title: "Old building",
		  description: "Location: Germany",
		  source:
			"https://images.unsplash.com/photo-1623345805780-8f01f714e65f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
		},
	  ];
	//   function WrapperComponent() {
	// 	return (
	// 	  <View>
	// 		<Modal isVisible={true}>
	// 		  <View style={{ flex: 1 }}>
	// 			<Text>I am the modal content!</Text>
	// 		  </View>
	// 		</Modal>
	// 	  </View>
	// 	);
	//   }
	// 	const [isModalVisible, setModalVisible] = useState(false);
 
	// 	const toggleModal = () => {
	// 		setModalVisible(!isModalVisible);
	// 		// ModalTester()
	// 	  };
		
	//   function ModalTester() {
	 
	// 	return (
	// 	  <View style={{ flex: 1 }}>
	  
	// 		<Modal isVisible={isModalVisible}>
	// 		  <View style={{ flex: 1 }}>
	// 			<Text>Hello!</Text>
	  
	// 			{/* <Button title="Hide modal" onPress={toggleModal} /> */}
	// 		  </View>
	// 		</Modal>
	// 	  </View>
	// 	);
	//   }
	return (
		<View className='flex-1 bg-black p-5'>
			<View className='flex flex-row justify-between items-center '>
				<View className='bg-opacity-40'>
					<Image source={require('../assets/logo.png')} className='w-36 h-8' />
				</View>
				<View
					className='flex flex-row justify-around'
					style={{ width: windowWidth / 5 }}
				>
					<TouchableOpacity onPress={()=>{navigation.navigate("Discover")}}>
						<Image
							className='w-5 h-5'
							source={require('../assets/Notification.png')}
						/>
					</TouchableOpacity>
					<TouchableOpacity >
						<Image
							className='w-5 h-5 pr-3'
							source={require('../assets/Setting.png')}
						/>
					</TouchableOpacity>
				</View>
			</View>
			<Text className='font-medium text-2xl pt-7 pb-1 '>Hello Bhuvana!!😉</Text>
			<Text className='text-zinc-500'>Have a great day!!!</Text>

			<View className='flex flex-row justify-between items-center pt-6 pb-6'>
				<ImageBackground
					className=' rounded-3xl w-20 h-20 overflow-hidden'
					source={{
						uri: 'https://cdn.shopify.com/s/files/1/0850/2114/files/tips_to_help_heighten_senses_480x480.png?v=1624399167'
					}}
				></ImageBackground>
				<View
					className='flex justify-center  bg-slate-100 rounded-xl '
					style={{ width: windowWidth / 2 }}
				>
					<Text className='flex py-2 px-3 text-base font-medium text-center text-black'>
						Create Your ZuleStudio
					</Text>
				</View>
			</View>
			<View
				className='flex flex-row justify-center items-center bg-zinc-800 rounded-xl'
				style={{ width: windowWidth - 40, height: windowHeight / 15 }}
			>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					{types.map((item, key) => (
						<TouchableOpacity onPress={() => setCardType(item)}>
							<Text key={key} className='text-base font-bold pl-6  pr-3 '>
								{' '}
								{item}
							</Text>
						</TouchableOpacity>
					))}
				</ScrollView>
			</View>

			{/* <SliderCarousel randomZules={LikedZules}>
        {({ item, index }) => {
          return <ProfileCarousel items={item} />;
        }}
      </SliderCarousel> */}

			<CircularNav navigation={navigation} />
		</View>
	);
};

export default Profile;
