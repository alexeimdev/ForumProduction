import { createStackNavigator } from 'react-navigation';
import * as screens from '../constants/screens';

import TreatedScreen from '../screens/TreatedScreen';
import TreatedDetailsScreen from '../screens/TreatedDetailsScreen';

const routeConfigs = {
    Treated: {
        screen: TreatedScreen,
        navigationOptions: {
            title: screens.Treated,
        },
    },
    TreatedDetails: {
        screen: TreatedDetailsScreen,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.BG_SUMMARY}`,
        }),
    },
}

const stackNavigatorConfig = {
    //headerMode: 'none',
}

export default TreatedStackNavigator = createStackNavigator(routeConfigs, stackNavigatorConfig);