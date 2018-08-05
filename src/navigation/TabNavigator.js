import { Platform } from 'react-native';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import * as screens from '../constants/screens';

// Screens:
import TestScreen from '../screens/TestScreen';
import TreatedScreen from '../screens/TreatedScreen';
import TreatedStackNavigator from '../navigation/TreatedStackNavigator';
import RequestsScreen from '../screens/RequestsScreen';
import ApprovedScreen from '../screens/ApprovedScreen';

const routeConfigs = {
    Approved: {
        screen: ApprovedScreen,
        navigationOptions: {
            title: screens.ApprovedHeb
        }
    },
    Requests: {
        screen: RequestsScreen,
        navigationOptions: {
            title: screens.RequestsHeb
        }
    },
    Treated: {
        screen: TreatedStackNavigator,
        navigationOptions: {
            title: screens.TreatedHeb
        }
    },
    // Test: {
    //     screen: TestScreen,
    //     navigationOptions: {
    //         title: screens.TestHeb
    //     }
    // },
}

const tabNavigatorConfig = {
    initialRouteName: screens.Treated,
}

export default TabNavigator = Platform.OS === 'ios' ?
    createBottomTabNavigator(routeConfigs, tabNavigatorConfig) :
    createMaterialTopTabNavigator(routeConfigs, tabNavigatorConfig);
