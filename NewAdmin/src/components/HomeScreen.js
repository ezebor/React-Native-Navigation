import React, { Component } from 'react';
import {
    Text, Button,
} from 'react-native';

import ScrollableScreen from './ScrollableScreen';

const HomeScreen = ({ navigation }) => (
    <ScrollableScreen>
        <Text>holaa</Text>
        <Button 
            title= "ir a orders"
            onPress={() => navigation.navigate("Ventas", {
                title: "Mis ventas",
            })}
        />
    </ScrollableScreen>
);

export default HomeScreen;