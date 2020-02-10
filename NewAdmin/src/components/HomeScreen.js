import React, { Component } from 'react';
import {
    Text, Button, Image
} from 'react-native';
import styled from 'styled-components';

import ScrollableScreen from './ScrollableScreen';
import HomeOrderCard from './HomeOrderCard';
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
    navigation.setOptions({
        headerLeft: () => (
            <Button 
                onPress={() => navigation.openDrawer()}
                title="Sidebar"
            />
        ),
    })

    const orderCardListData = [
        <HomeOrderCard
            key={1}
            icon={waitingPayment}
            iconBackgroundColor="#FFB437"
            title="40 órdenes"
            body="Esperando confirmación de pago"
            shape="circle"
        />,
        <HomeOrderCard
            key={2}
            icon={waitingShipment}
            iconBackgroundColor="#2C3457"
            title="40 órdenes"
            body="Esperando confirmación de envio"
            shape="circle"
        />,
        <HomeOrderCard
            key={3}
            icon={waitingPacking}
            iconBackgroundColor="#039DDD"
            title="3 órdenes"
            body="Esperando ser empaquetadas"
            shape="circle"
        />,
    ]

    return (
        <ScrollableScreen>
            <StyledHeader>Prestá atención a estas órdenes</StyledHeader>
            <CardContainer data={orderCardListData} />
            <StyledHeader paddingTop="40" textAlign="center">
                Estadísticas principales de tu tienda
            </StyledHeader>
        </ScrollableScreen>
    )
};

export default HomeScreen;