import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import { Formik } from 'formik';

import FormInput from '../../components/auth.components/FormInput';
import { emailSignInValidationSchema } from '../../utils/validation.utils';

const SignIn = ({ navigation }) => {
	const handleLoginSubmit = async () => {};

	return (
		<View className='flex-1 items-center justify-center bg-black px-6 relative'>
			<View className='flex-col'>
				<View className='flex justify-end mb-5'>
					<Image
						className='w-48 h-10'
						source={require('../../assets/logo.png')}
					/>
				</View>
				<Text className='text-white font-extrabold text-4xl text-left pb-6'>
					Sign In
				</Text>
				<Formik
					initialValues={{ email: '', password: '' }}
					onSubmit={(value) => handleLoginSubmit(value)}
					validationSchema={emailSignInValidationSchema}
				>
					{({
						handleSubmit,
						handleChange,
						handleBlur,
						values,
						errors,
						isValid,
						touched
					}) => {
						return (
							<View className='w-[85vw] '>
								<FormInput
									onChangeText={handleChange('email')}
									onBlur={handleBlur('email')}
									value={values.email}
									keyboardType={'email-address'}
									label='Email'
									placeholder='peter@mizule.com'
									handleSubmit={handleSubmit}
									error={errors.email}
									touched={touched.email}
								/>
								<FormInput
									onChangeText={handleChange('password')}
									onBlur={handleBlur('password')}
									value={values.password}
									label='Password'
									placeholder='Enter your Password'
									handleSubmit={handleSubmit}
									error={errors.password}
									touched={touched.password}
									secureTextEntry={true}
								/>
								<TouchableOpacity
									className='pt-2 pb-6 flex border border-gray-200 py-2 justify-center items-center bg-white rounded-md mb-3 mt-3'
									onPress={handleSubmit}
								>
									<Text className='font-bold text-lg text-black'>Sign In</Text>
								</TouchableOpacity>
								<TouchableOpacity className='pb-2'>
									<Text className=''>Forgot password ?</Text>
								</TouchableOpacity>
								<View className='flex flex-row'>
									<Text>Don't have an account?</Text>
									<TouchableOpacity
										className='pb-2'
										onPress={() => navigation.navigate('SignUp')}
									>
										<Text className='pl-2 font-medium text-white'>Sign Up</Text>
									</TouchableOpacity>
								</View>
							</View>
						);
					}}
				</Formik>
			</View>
		</View>
	);
};

export default SignIn;
