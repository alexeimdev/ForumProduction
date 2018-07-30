import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default TreatedListItem = (props) => {
    const { item, index } = props;
    
    return (
        <View style={styles.container} key={index}>
            <Text>{item.text}</Text>
        </View>        
    );
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        borderWidth: 1
    },
});