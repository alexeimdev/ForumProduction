import { Platform } from 'react-native';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import * as screens from '../constants/screens';

// Screens:
import Test from '../screens/Test';
import Treated from '../screens/Treated';
import Requests from '../screens/Requests';
import Approved from '../screens/Approved';

const routeConfigs = {
    Approved: {
        screen: Approved,
        title: screens.Approved
    },
    Requests: {
        screen: Requests,
        title: screens.Requests
    },
    Treated: {
        screen: Treated,
        title: screens.Treated
    },
    Test: {
        screen: Test,
        title: screens.Test
    },
}

const tabNavigatorConfig = {
    initialRouteName: screens.Treated,
}

export default TabNavigator = Platform.OS === 'ios' ?
    createBottomTabNavigator(routeConfigs, tabNavigatorConfig) :
    createMaterialTopTabNavigator(routeConfigs, tabNavigatorConfig);
