import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Zules from '../screens/Zules.screen';
import Discover from '../screens/Discover.screen';
import Setting from '../screens/Setting.screen';
import Profile from '../screens/Profile.screen';

const { Navigator, Screen } = createStackNavigator();

const MainNav = () => {
	return (
		<NavigationContainer>
			<Navigator
				initialRouteName='Zules'
				screenOptions={{ headerShown: false, animationEnabled: false }}
				detachInactiveScreens={true}
			>
				<Screen name='Zules' component={Zules} />
				<Screen name='Discover' component={Discover} />
				<Screen name='Setting' component={Setting} />
				<Screen name='Profile' component={Profile} />
			</Navigator>
		</NavigationContainer>
	);
};

export default MainNav;
