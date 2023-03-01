import { View, Text } from 'react-native';
import React from 'react';
import { getAverageColor } from 'fast-average-color-node';

const ColorDetect = () => {
	async function printAverageColor() {
		const color = await getAverageColor(
			'https://i.pinimg.com/originals/aa/8d/a9/aa8da9413fe57e4e64ff50141ad77435.jpg'
		);
		console.log(color);
	}

	printAverageColor();
	return (
		<View>
			<Text>ColorDetect</Text>
		</View>
	);
};

export default ColorDetect;
