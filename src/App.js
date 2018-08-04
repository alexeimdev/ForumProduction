import React, { Component } from 'react';
import TreatedStackNavigator from './navigation/TreatedStackNavigator';

// Components:
import Header from './components/Header';

export default class MyApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TreatedStackNavigator />
        )
    }
}