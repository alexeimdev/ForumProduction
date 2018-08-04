import { createStackNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator';

const routeConfigs = {
    TabNavigator
}

const StackNavigatorConfig = {
    headerMode: 'none',
}

export default StackNavigator = createStackNavigator(routeConfigs, StackNavigatorConfig);