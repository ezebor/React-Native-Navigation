import React, { Component } from 'react';
import {
    Text, Button, Image
} from 'react-native';

import ScrollableScreen from './ScrollableScreen';
import Card from './Card';
import CardIcon from './CardIcon';
import CardContent from './CardContent';
import waitingPayment from '../assets/ic_order_waiting_manual_confirmation.png';
import waitingShipment from '../assets/ic_order_waiting_shipment_all.png';
import waitingPacking from '../assets/ic_order_waiting_packing.png';

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
            <Card>
                <CardIcon 
                    image={waitingPayment} 
                    backgroundColor="#FFB437"
                    shape="circle" 
                />
                <CardContent>
                    <Text>40 órdenes</Text>
                    <Text>Esperando confirmación de pago</Text>
                </CardContent>
            </Card>
        </ScrollableScreen>
    )
};

export default HomeScreen;