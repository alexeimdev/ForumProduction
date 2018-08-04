import React, { Component } from 'react';
import StackNavigator from './navigation/StackNavigator';

// Components:
import Header from './components/Header';

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