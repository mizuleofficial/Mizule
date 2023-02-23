import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SliderNav from './Slider.navigation';
import WatchZule from '../screens/WatchZule.screen';
import Setting from '../screens/Setting.screen';

const { Navigator, Screen } = createStackNavigator();

const MainNav = () => {
	return (
		<NavigationContainer>
			<Navigator
				initialRouteName='Main'
				screenOptions={{ headerShown: false, animationEnabled: false }}
				detachInactiveScreens={true}
			>
				<Screen name='Main' component={SliderNav} />
				<Screen name='WatchZule' component={WatchZule} />
				<Screen name='Setting' component={Setting} />
			</Navigator>
		</NavigationContainer>
	);
};

export default MainNav;
