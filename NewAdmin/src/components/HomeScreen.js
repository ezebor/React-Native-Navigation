import React, { Component } from 'react';
import {
    Text, Button,
} from 'react-native';

import ScrollableScreen from './ScrollableScreen';

const HomeScreen = ({ navigation }) => {
    navigation.setOptions({
        headerRight: () => (
            <Button 
                onPress={() => navigation.navigate("Ventas")}
                title="Mis ventas"
            />
        ),
    })
    return (
        <ScrollableScreen>
            <Text>holaa</Text>
        </ScrollableScreen>
    )
};

export default HomeScreen;