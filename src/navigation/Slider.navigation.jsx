import { createStackNavigator } from '@react-navigation/stack';

// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Zules from '../screens/Zules.screen';
import Discover from '../screens/Discover.screen';
import Profile from '../screens/Profile.screen';

const { Navigator, Screen } = createStackNavigator();

const SliderNav = () => {
	return (
		<Navigator
			initialRouteName='Zules'
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					backgroundColor: 'black'
				},
				tabBarLabelStyle: {
					color: 'white'
				},
				tabBarIndicatorStyle: {
					backgroundColor: 'transparent'
				}
			}}
			tabBarPosition='bottom'
		>
			<Screen
				name='Zules'
				component={Zules}
				options={{ swipeEnabled: false }}
			/>
			<Screen
				name='Discover'
				component={Discover}
				options={{ swipeEnabled: false }}
			/>
<<<<<<< HEAD
			<Screen
				name='Profile'
				component={Profile}
				options={{ swipeEnabled: false }}
			/>
=======
>>>>>>> 67d8aeb2501a52513274347b9d4fdf2100a5fa82
		</Navigator>
	);
};

export default SliderNav;
