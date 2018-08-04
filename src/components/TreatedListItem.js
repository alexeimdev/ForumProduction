import React from 'react';
import { ListItem } from 'react-native-elements';
import * as screens from '../constants/screens';

export default TreatedListItem = (props) => {

    const { item, index, navigation } = props;

    return (
        <ListItem
            key={index}
            title={item.BG_SUMMARY}
            subtitle={item.BG_BUG_ID}
            onPress={() => {
                navigation.navigate(screens.TreatedDetails, item)
            }}
        />
    );
}