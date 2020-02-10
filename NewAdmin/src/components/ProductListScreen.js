import React from 'react';
import {
    Text,
    Button,
    SafeAreaView,
} from 'react-native';

import ScrollableScreen from './ScrollableScreen';

const ProductListScreen = ({ route, navigation }) => {
    return (
        <ScrollableScreen>
            <SafeAreaView>
                <Text>Products</Text>
                <Button 
                    onPress={() => navigation.navigate("Home")}
                    title="Home"
                />
            </SafeAreaView>
        </ScrollableScreen>
    );
};

export default ProductListScreen;