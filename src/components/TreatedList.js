import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';
import TreatedListItem from './TreatedListItem';

export default TreatedList = (props) => {

    var list = require('../data/GetForumForMe.json');
    
    return (
        <ScrollView style={styles.container}>
            <List>
                {list.map((item, index) => (
                    <TreatedListItem item={item} key={index} {...props} />
                ))}
            </List>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
    },
});