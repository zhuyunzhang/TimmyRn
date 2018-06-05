import { createStackNavigator } from 'react-navigation';
import MainPage from './page/main/MainPage'
import LoginPage from './page/login/LoginPage'

const RootStack = createStackNavigator(
    {
        Login:LoginPage,
        Main:MainPage,
    },
    {
        initialRouteName: 'Login',
        /* The header config from HomeScreen is now here */
        navigationOptions: {
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