import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//import { List, ListItem, Icon } from 'react-native-elements';

export default TreatedDetails = (props) => {
    const { BG_BUG_ID, BG_SUMMARY, BG_PROJECT } = props.navigation.state.params;
    return (
        <View style={styles.container}>
            <View>
                <Text>{BG_BUG_ID}</Text>
            </View>
            <View>
                <Text>{BG_SUMMARY}</Text>
            </View>
            <View>
                <Text>{BG_PROJECT}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
    },
});