import { View, TextInput, Text } from 'react-native';
import React from 'react';

const FormInput = ({
	label,
	placeholder,
	value,
	isValid,
	error,
	touched,
	...rest
}) => {
	return (
		<View className={`pt-2 pb-2 ${error ? 'pb-1' : 'pb-4'}`}>
			<View
				className={`border ${
					isValid ? 'border-zinc-700' : 'border-red-700'
				} pl-3 rounded-md`}
			>
				<TextInput
					className='placeholder: text-slate-300 hover:file:bg-violet-100 '
					value={value}
					label={label}
					placeholder={placeholder}
					{...rest}
				/>
			</View>
			<Text>{error && error} </Text>
		</View>
	);
};

export default FormInput;
