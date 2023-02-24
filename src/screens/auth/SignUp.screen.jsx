import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import 'react-native-gesture-handler';
import FormInput from '../../components/auth.components/FormInput';
import { Formik } from 'formik';
import {
	emailSignUpValidationSchema,
	phoneSignUpValidationSchema
} from '../../utils/validation.utils';

const SignUp = ({ navigation }) => {
	const [signupType, setSignUpType] = useState('email');

	const handleEmailSignUp = async () => {};

	const handlePhoneSignUp = async () => {};

	const emailSignUpInitialValues = {
		email: '',
		password: '',
		confirmpassword: ''
	};
	const phoneSignUpInitialValues = {
		phone: '',
		password: '',
		confirmpassword: ''
	};

	return (
		<View className='flex-1 items-center justify-center bg-black px-6 relative'>
			<View className='flex-col'>
				<View className='flex justify-end mb-5'>
					<Image
						className='w-48 h-10'
						source={require('../../assets/logo.png')}
					/>
				</View>
				<Text className='text-white font-extrabold text-3xl text-left pb-5'>
					Sign Up
				</Text>
				<Formik
					initialValues={
						signupType === 'email'
							? emailSignUpInitialValues
							: phoneSignUpInitialValues
					}
					onSubmit={(value) => {
						console.log(value);
						signupType == 'email'
							? handleEmailSignUp(value)
							: handlePhoneSignUp(value);
					}}
					validationSchema={
						signupType === 'email'
							? emailSignUpValidationSchema
							: phoneSignUpValidationSchema
					}
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
								{signupType == 'email' ? (
									<View>
										<Text>Email</Text>
										<FormInput
											onChangeText={handleChange('email')}
											onBlur={handleBlur('email')}
											value={values.email}
											keyboardType={'email-address'}
											label='Email'
											placeholder='peter@mizule.com'
											handleSubmit={handleSubmit}
											isValid={isValid}
											error={errors.email}
											touched={touched.email}
										/>
									</View>
								) : (
									<View>
										<Text>Phone Number</Text>
										<FormInput
											onChangeText={handleChange('phone')}
											onBlur={handleBlur('phone')}
											value={values.phone}
											keyboardType={'phone-pad'}
											label='phone'
											placeholder='+91- 00000 00000'
											handleSubmit={handleSubmit}
											error={errors.email}
											touched={touched.email}
										/>
									</View>
								)}
								<View>
									<Text>Password</Text>
									<FormInput
										onChangeText={handleChange('password')}
										onBlur={handleBlur('password')}
										value={values.password}
										label='Password'
										placeholder='Enter your Password'
										handleSubmit={handleSubmit}
										isValid={isValid}
									/>
								</View>
								<View>
									<Text>Confirm Password</Text>
									<FormInput
										onChangeText={handleChange('confirmpassword')}
										onBlur={handleBlur('Confirmpassword')}
										value={values.confirmpassword}
										label='Confirm password'
										placeholder='Re-enter password'
										handleSubmit={handleSubmit}
										isValid={isValid}
									/>
								</View>
								<TouchableOpacity
									className='pt-2 pb-6 flex border border-gray-200 py-2 justify-center items-center bg-white rounded-md'
									onPress={handleSubmit}
								>
									{/* <View className='flex border border-gray-200 py-2 justify-center items-center bg-white rounded-md'> */}
									<Text className='font-bold text-lg text-black'>Sign Up</Text>
									{/* </View> */}
								</TouchableOpacity>

								<View className='flex flex-row'>
									<Text>Already have an account?</Text>
									<TouchableOpacity
										className='pb-2'
										onPress={() => navigation.navigate('SignIn')}
									>
										<Text className='pl-2 font-medium text-white'>Sign In</Text>
									</TouchableOpacity>
								</View>
							</View>
						);
					}}
				</Formik>
				{signupType == 'email' ? (
					<TouchableOpacity onPress={() => setSignUpType('phone')}>
						<Text>Continue with Phone Number</Text>
					</TouchableOpacity>
				) : (
					<TouchableOpacity onPress={() => setSignUpType('email')}>
						<Text>Continue with Email</Text>
					</TouchableOpacity>
				)}

				{/* <View className="flex flex-row w-full items-center justify-center mt-2">
          <View className="h-[1px] w-[38vw] bg-zinc-700"></View>
          <Text className="flex justify-center items-center mx-2 font-extrabold">
            OR
          </Text>
          <View className="h-[1px] w-[37vw] bg-zinc-700"></View>
        </View>
        <TouchableOpacity className="pt-6 pb-5">
          <View className="flex flex-row border border-zinc-700  py-2 justify-center items-center bg-transparent rounded-md">
            <Image
              className="w-7 h-7"
              source={require("../../assets/AuthImages/Google.png")}
            />

            <Text className="font-medium text-base py-1 pl-3 text-white">
              Continue with Google
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex flex-row border border-zinc-700  py-2 justify-center items-center bg-transparent rounded-md">
            <Image
              className="w-6 h-7"
              source={require("../../assets/AuthImages/Apple.png")}
            />

            <Text className=" font-medium text-base py-1 pl-3 text-white">
              Continue with Apple
            </Text>
          </View>
        </TouchableOpacity> */}
			</View>
		</View>
	);
};

export default SignUp;
