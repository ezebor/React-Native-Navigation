import React, { Component } from 'react';
import {
    Text, Button, Image
} from 'react-native';
import styled from 'styled-components';

import ScrollableScreen from './ScrollableScreen';
import Card from './Card';
import CardIcon from './CardIcon';
import CardContent from './CardContent';
import CardContainer from './CardContainer';
import waitingPayment from '../assets/ic_order_waiting_manual_confirmation.png';
import waitingShipment from '../assets/ic_order_waiting_shipment_all.png';
import waitingPacking from '../assets/ic_order_waiting_packing.png';

const StyledHeader = styled.Text.attrs(({ textAlign, paddingTop }) => ({
    textAlign: textAlign ?? 'left',
    paddingTop: paddingTop ?? '10',
  }))`
    paddingTop: ${props => props.paddingTop};
    paddingBottom: 20;
    textAlign: ${props => props.textAlign};
    fontSize: 24;
  `;

const HomeScreen = ({ route, navigation }) => {
    console.log(route.name);
    navigation.setOptions({
        headerLeft: () => (
            <Button 
                onPress={() => navigation.navigate("Ventas")}
                title="HOLIS ventas"
            />
        ),
    })
    return (
        <ScrollableScreen>
            <StyledHeader>Prestá atención a estas órdenes</StyledHeader>
            <CardContainer>
                <Card key={1}>
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

                <Card key={2}>
                    <CardIcon 
                        image={waitingShipment} 
                        backgroundColor="#2C3457"
                        shape="circle" 
                    />
                    <CardContent>
                        <Text>1 orden</Text>
                        <Text>Esperando confirmación de envio.</Text>
                    </CardContent>
                </Card>

                <Card key={3}>
                    <CardIcon 
                        image={waitingPacking} 
                        backgroundColor="#039DDD"
                        shape="circle" 
                    />
                    <CardContent>
                        <Text>3 órdenes</Text>
                        <Text>Esperando ser empaquetadas.</Text>
                    </CardContent>
                </Card>
            </CardContainer>

            <StyledHeader paddingTop="40" textAlign="center">
                Estadísticas principales de tu tienda
            </StyledHeader>

  
        </ScrollableScreen>
    )
};

export default HomeScreen;