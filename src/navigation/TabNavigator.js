import { Platform } from 'react-native';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import * as screens from '../constants/screens';

// Screens:
import TestScreen from '../screens/TestScreen';
import TreatedScreen from '../screens/TreatedScreen';
import RequestsScreen from '../screens/RequestsScreen';
import ApprovedScreen from '../screens/ApprovedScreen';

const routeConfigs = {
    Approved: {
        screen: ApprovedScreen,
        title: screens.Approved
    },
    Requests: {
        screen: RequestsScreen,
        title: screens.Requests
    },
    Treated: {
        screen: TreatedScreen,
        title: screens.Treated
    },
    // Test: {
    //     screen: TestScreen,
    //     title: screens.Test
    // },
}

const tabNavigatorConfig = {
    initialRouteName: screens.Treated,
}

export default TabNavigator = Platform.OS === 'ios' ?
    createBottomTabNavigator(routeConfigs, tabNavigatorConfig) :
    createMaterialTopTabNavigator(routeConfigs, tabNavigatorConfig);
