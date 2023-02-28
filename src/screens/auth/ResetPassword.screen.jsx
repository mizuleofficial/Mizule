import {
	View,
	Text,
	TouchableOpacity,
	Image,
	ActivityIndicator,
	Linking
} from 'react-native';
import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { Formik } from 'formik';

import FormInput from '../../components/auth/FormInput.component';
import {
	ResetPasswordEmailValidationSchema,
	ResetPasswordValidationSchema
} from '../../utils/validation.utils';
import {
	verifyResetPasswordEmail,
	resetPassword
} from '../../axios/auth.axios';

const ResetPassword = ({ navigation }) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [isVerified, setIsVerified] = useState(false);
	const [message, setMessage] = useState('');

	useEffect(() => {
		Linking.addEventListener('url', async (url) => {
			setMessage('');
			setIsVerified(true);
		});
	}, []);

	const handleVerifyEmail = async (values) => {
		setLoading(true);
		await verifyResetPasswordEmail(values).then((res) => {
			setLoading(false);
			setMessage('Check your email');
		});
	};

	const handleResetPassword = async (values) => {
		setLoading(true);
		await resetPassword(values).then((res) => {
			setLoading(false);
			navigation.navigate('SignIn', {
				message: 'Password resetted successfully. Try signing in.'
			});
		});
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
					Reset Password
				</Text>
				<Formik
					initialValues={
						isVerified
							? { email: '', password: '', confirmpassword: '' }
							: { email: '' }
					}
					onSubmit={(value) => {
						isVerified ? handleResetPassword(value) : handleVerifyEmail(value);
					}}
					validationSchema={
						isVerified
							? ResetPasswordValidationSchema
							: ResetPasswordEmailValidationSchema
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
									editable={!(loading || Boolean(message.length))}
								/>
								{isVerified && (
									<>
										<FormInput
											onChangeText={handleChange('password')}
											onBlur={handleBlur('password')}
											value={values.password}
											label='Password'
											placeholder='Enter your Password'
											handleSubmit={handleSubmit}
											error={errors.password}
											touched={touched.password}
										/>
										<FormInput
											onChangeText={handleChange('confirmpassword')}
											onBlur={handleBlur('confirmpassword')}
											value={values.confirmpassword}
											label='Confirm password'
											placeholder='Re-enter password'
											handleSubmit={handleSubmit}
											error={errors.confirmpassword}
											touched={touched.confirmpassword}
										/>
									</>
								)}
								{error && <Text className='text-red-800'>{error}</Text>}
								<TouchableOpacity
									className='pt-2 pb-6 flex border border-gray-200 py-2 justify-center items-center bg-white rounded-md mt-2 mb-3'
									onPress={handleSubmit}
									disabled={
										loading
											? true
											: loading || Boolean(message.length)
											? true
											: isVerified || !Boolean(message.length)
											? false
											: true
									}
								>
									<Text className='font-bold text-lg text-black'>
										{loading ? (
											<ActivityIndicator />
										) : !message.length || isVerified ? (
											'Verify Email'
										) : message ? (
											message
										) : (
											'Reset Password'
										)}
									</Text>
								</TouchableOpacity>

								<View className='flex flex-row'>
									<Text>Know your password already?</Text>
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
				{/* {signupType == 'email' ? (
					<TouchableOpacity onPress={() => setSignUpType('phone')}>
						<Text>Continue with Phone Number</Text>
					</TouchableOpacity>
				) : (
					<TouchableOpacity onPress={() => setSignUpType('email')}>
						<Text>Continue with Email</Text>
					</TouchableOpacity>
				)} */}

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

export default ResetPassword;
