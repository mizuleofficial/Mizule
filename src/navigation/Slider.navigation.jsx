import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Zules from '../screens/Zules.screen';
import Discover from '../screens/Discover.screen';

const { Navigator, Screen } = createMaterialTopTabNavigator();

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
			<Screen name='Zules' component={Zules} options={{swipeEnabled:false}} />
			<Screen name='Discover' component={Discover} />
		</Navigator>
	);
};

export default SliderNav;
