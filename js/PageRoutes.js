import { createStackNavigator } from 'react-navigation';
import MainPage from './HomeTabRoutes'
import LoginPage from './page/login/LoginPage'

//页面导航器
const RootStack = createStackNavigator(
    {
        Login:LoginPage,
        Main:MainPage,
    },
    {
        initialRouteName: 'Login',
        /* The header config from HomeScreen is now here */
        navigationOptions: {
            header:null,
            headerStyle: {
                backgroundColor: '#f00',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

export {RootStack}