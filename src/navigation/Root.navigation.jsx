import React from 'react';
import { useSelector } from 'react-redux';

import AuthNav from './Auth.navigation';
import MainNav from './Main.navigation';

const RootNav = () => {
	var { user } = useSelector((state) => ({ ...state }));
	return <>{!user ? <AuthNav /> : <MainNav />}</>;
};

export default RootNav;
