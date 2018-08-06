import React, { Component } from 'react';
import { I18nManager } from 'react-native';
import RootStackNavigator from './navigation/RootStackNavigator';
// Components:
import Header from './components/Header';


export default class MyApp extends Component {
    constructor(props) {
        super(props);
        ////I18nManager.forceRTL(true);
    }

    render() {
        return (
            <RootStackNavigator />
        )
    }
}