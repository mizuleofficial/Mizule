import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SignIn from '../screens/auth/SignIn.screen';
import SignUp from '../screens/auth/SignUp.screen';
import { Text } from 'react-native';

const { Navigator, Screen } = createStackNavigator();

const AuthNav = () => {
	return (
		<NavigationContainer>
			<Navigator
				initialRouteName='SignIn'
				screenOptions={{ headerShown: false }}
			>
				<Screen name='SignIn' component={SignIn} />
				<Screen name='SignUp' component={SignUp} />
			</Navigator>
		</NavigationContainer>
	);
};

export default AuthNav;
