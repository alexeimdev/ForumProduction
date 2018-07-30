import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    // ScrollView,
    // Button,
    // ToastAndroid,
} from 'react-native';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';

// Screens:
import Test from './src/screens/Test';
import Treated from './src/screens/Treated';
import Requests from './src/screens/Requests';
import Approved from './src/screens/Approved';

// Components:
import Header from './src/components/Header';

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

export const TopTabNavigator = createMaterialTopTabNavigator({
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
    })

export const StackNavigator = createStackNavigator({
    TopTabNavigator
})

/*
class TabViewExample extends PureComponent {
            state = {
                index: 0,
                routes: [
                    { key: 'ForumProduction', title: 'ForumProduction' }
                ],
            };
        _handleIndexChange = index => this.setState({index});
_renderHeader = props => <TabBar {...props} />;
_renderScene = SceneMap({
            'ForumProduction': ForumProduction
    });
 
_onRequestChangeTab = index => this.setState({index});
    
render() {
return (
    <TabViewAnimated
            style={styles.container}
            navigationState={this.state}
            renderScene={this._renderScene}
            renderHeader={this._renderHeader}
            onIndexChange={this._handleIndexChange}
            onRequestChangeTab={this._onRequestChangeTab}
        />
        );
    }
}
*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

AppRegistry.registerComponent('MyApp', () => MyApp);
