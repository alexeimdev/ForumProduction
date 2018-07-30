import React from 'react';
import { View, Text } from 'react-native';

import TreatedListItem from './TreatedListItem';

export default TreatedList = () => {
    var list = [
        { text: "item one" },
        { text: "item two" },
        { text: "item three" },
        { text: "item four" },
        { text: "item five" },
        { text: "item six" },
        { text: "item seven" },
    ];

    return (
        <View>
            {
                list.map((item, index) => (
                    <TreatedListItem item={item} index={index} />
                ))
            }
        </View>
    )

}