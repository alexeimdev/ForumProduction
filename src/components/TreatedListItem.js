import React from 'react';
import { View, Text } from 'react-native';

export default TreatedListItem = (item, index) => {
    return (
        <View key={index}>
            <Text>{item.text}</Text>
        </View>
    )
}