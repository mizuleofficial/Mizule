import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SignIn from '../screens/auth/SignIn.screen';
import SignUp from '../screens/auth/SignUp.screen';
import OtpScreen from '../screens/auth/Otp.screen';
import WelcomeScreen from '../screens/auth/Welcome.screen';

const { Navigator, Screen } = createStackNavigator();

const AuthNav = () => {
	return (
		<NavigationContainer>
			<Navigator
				initialRouteName='SignUp'
				screenOptions={{ headerShown: false, animationEnabled: false }}
			>
				<Screen name='WelcomeScreen' component={WelcomeScreen} />
				<Screen name='SignIn' component={SignIn} />
				<Screen name='SignUp' component={SignUp} />
				<Screen name='OtpScreen' component={OtpScreen} />
			</Navigator>
		</NavigationContainer>
	);
};

export default AuthNav;
