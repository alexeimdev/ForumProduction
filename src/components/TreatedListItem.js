import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default TreatedListItem = (props) => {
    const { item } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{item.BG_SUMMARY}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        padding: 12,
        margin: 2,
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});