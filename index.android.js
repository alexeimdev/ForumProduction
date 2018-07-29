import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    ScrollView,
    Button,
    ToastAndroid,
} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

// Screens:
import ForumProduction from './src/screens/ForumProduction';

// Components:
import Header from './src/components/Header';

export default class MyApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Stack />
        )
    }
}

export const Tabs = TabNavigator({
    ForumProduction: {
        screen: ForumProduction,
        title: "Forum Production"
    },
    ForumProduction2: {
        screen: ForumProduction,
        title: "Forum Production 2"
    },
})

export const Stack = StackNavigator({
    Tabs
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
