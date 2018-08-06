import React from 'react';
import * as screens from '../constants/screens';
import { Platform, View, Text } from 'react-native';
import {
    createStackNavigator,
    createDrawerNavigator,
    createMaterialTopTabNavigator,
    createBottomTabNavigator,
    DrawerItems
} from 'react-navigation';

import ApprovedScreen from '../screens/ApprovedScreen';
import RequestsScreen from '../screens/RequestsScreen';
import TestScreen from '../screens/TestScreen';
import TreatedDetailsScreen from '../screens/TreatedDetailsScreen';
import TreatedScreen from '../screens/TreatedScreen';

import Header from '../components/Header';

export default RootStackNavigator = createStackNavigator({
    Main: createMaterialTopTabNavigator({
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
        Treateded: {
            screen: createStackNavigator({
                Treated: {
                    screen: TreatedScreen,
                    navigationOptions: {
                        title: screens.TreatedHeb,
                    },
                },
                TreatedDetails: {
                    screen: TreatedDetailsScreen,
                    navigationOptions: ({ navigation }) => ({
                        title: `${navigation.state.params.BG_BUG_ID}`,
                    }),
                },
            }),
            navigationOptions: {
                title: screens.TreatedHeb
            }
        },
        Test: {
            screen: TestScreen,
            navigationOptions: {
                title: screens.TestHeb
            }
        },
    }),
    Menu: createDrawerNavigator({
        Approved: {
            screen: ApprovedScreen
            // navigationOptions: {
            //     title: screens.ApprovedHeb
            // }
        },
    }, {
            headerMode: 'float',
            navigationOptions: ({ navigation }) => ({
                headerStyle: { backgroundColor: '#4C3E54' },
                title: 'Welcome!',
                headerTintColor: 'blue',
                headerLeft: <Text onPress={() => 
                    navigation.navigate('DrawerOpen')}>Menu</Text>
            })
        })
}, {
        headerMode: 'none',
    })

