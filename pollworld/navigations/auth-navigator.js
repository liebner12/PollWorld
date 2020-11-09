import {createStackNavigator} from 'react-navigation-stack';

import LoginPage from '../scenes/login/loginPage';
import StartPage from '../scenes/login/startPage';

const AuthNavigatorConfig = {
    initialRouteName: 'Start',
    header: null,
    headerMode: 'none',
};

const RouteConfigs = {
    Start: StartPage,
    Login: LoginPage,
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;