import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// import SliderNav from './Slider.navigation';
import Zules from '../screens/Zules.screen';
import Discover from '../screens/Discover.screen';
import WatchZule from '../screens/WatchZule.screen';
import Setting from '../screens/Setting.screen';

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
				<Screen name='WatchZule' component={WatchZule} />
				<Screen name='Setting' component={Setting} />
			</Navigator>
		</NavigationContainer>
	);
};

export default MainNav;
