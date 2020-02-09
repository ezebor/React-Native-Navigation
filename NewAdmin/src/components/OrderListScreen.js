import React from 'react';
import {
    Text,
    Button,
    SafeAreaView,
} from 'react-native';

import ScrollableScreen from './ScrollableScreen';

const OrderListScreen = ({ route, navigation }) => {
    return (
        <ScrollableScreen>
            <SafeAreaView>
                <Button 
                    onPress={() => navigation.navigate("Home")}
                    title="Home"
                />
            </SafeAreaView>
        </ScrollableScreen>
    );
};

export default OrderListScreen;