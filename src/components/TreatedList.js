import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import TreatedListItem from './TreatedListItem';

export default TreatedList = () => {

    var list = require('../data/GetForumForMe.json');
    return (
        <ScrollView style={styles.container}>
            {
                list.map((item, index) => (
                    <TreatedListItem item={item} key={index} />
                ))
            }
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
    },
});