import React from 'react';
import 'react-native-gesture-handler';

import AuthNav from './src/navigation/Auth.navigation';
import MainNav from './src/navigation/Main.navigation';

const App = () => {
	var user = true;
	return <>{user ? <MainNav /> : <AuthNav />}</>;
};

export default App;
