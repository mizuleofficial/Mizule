import React from 'react';
import AuthNav from './src/navigation/Auth.navigation';
import SliderNav from './src/navigation/Slider.navigation';

const App = () => {
	var user = null;
	return <>{user ? <SliderNav /> : <AuthNav />}</>;
};

export default App;
