import { StyleSheet, Image } from 'react-native';
import React from 'react';
import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/dist/AntDesign';

const CircularNav = ({ navigation }) => {
	return (
		<ActionButton
			buttonColor='#111'
			position='right'
			size={75}
			itemSize={50}
			degrees={0}
			icon={
				<Image
					source={require('../../assets/Z-silver-png.png')}
					className='w-8 h-8'
				/>
			}
		>
			<ActionButton.Item
				buttonColor='#111'
				title='New Task'
				onPress={() => navigation.navigate('Zules')}
			>
				<Image
					source={require('../../assets/Z-silver-png.png')}
					className='w-8 h-8'
				/>
			</ActionButton.Item>
			<ActionButton.Item
				buttonColor='#3498db'
				title='Notifications'
				onPress={() => navigation.navigate('Discover')}
			>
				<Icon name='rightcircle' style={styles.actionButtonIcon} />
			</ActionButton.Item>
			<ActionButton.Item
				buttonColor='#1abc9c'
				title='All Tasks'
				onPress={() => navigation.navigate('Profile')}
			>
				<Icon name='rightcircle' style={styles.actionButtonIcon} />
			</ActionButton.Item>
		</ActionButton>
	);
};

const styles = StyleSheet.create({
	actionButtonIcon: {
		fontSize: 20,
		height: 22,
		color: 'white'
	}
});

export default CircularNav;
