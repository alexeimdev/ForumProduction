import React, { Component } from 'react';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';

// Screens:
import Test from './screens/Test';
import Treated from './screens/Treated';
import Requests from './screens/Requests';
import Approved from './screens/Approved';

// Components:
import Header from './components/Header';

const MaterialTopTabNavigator = createMaterialTopTabNavigator({
    Approved: {
        screen: Approved,
        title: "Approved"
    },
    Requests: {
        screen: Requests,
        title: "Requests"
    },
    Treated: {
        screen: Treated,
        title: "Treated"
    },
    // Test: {
    //     screen: Test,
    //     title: "Test"
    // },
}, {
        initialRouteName: 'Treated',
        animationEnabled: false,
    });

const StackNavigator = createStackNavigator({
    MaterialTopTabNavigator
});


export default class MyApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StackNavigator />
        )
    }
}