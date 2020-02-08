import React from 'react';
import {
    Text,
} from 'react-native';

import ScrollableScreen from './ScrollableScreen';

const OrderListScreen = ({ route, navigation }) => {
    const { title } = route.params;
    return (
        <ScrollableScreen>
            <Text>{title}</Text>
        </ScrollableScreen>
    );
};

export default OrderListScreen;