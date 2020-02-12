import React from 'react';
import {
    SafeAreaView,
} from 'react-native';
import OrdersHeader from './components/orders/Header';
import OrdersContainer from './components/orders/Container';
import OrderCard from './components/orders/Card';
import StatsHeader from './components/stats/Header';
import StatsContainer from './components/stats/Container';
import StatsCard from './components/stats/Card';
import waitingPayment from '../assets/ic_order_waiting_manual_confirmation.png';
import waitingShipment from '../assets/ic_order_waiting_shipment_all.png';
import waitingPacking from '../assets/ic_order_waiting_packing.png';
import styled from 'styled-components';

const orderListData = [
    <OrderCard 
        color="#FFB437"
        iconSource={waitingPayment}
        title="40 órdenes"
        body="Esperando confirmación de pago"
    />,
    <OrderCard 
        color="#2C3457"
        iconSource={waitingShipment}
        title="1 orden"
        body="Esperando confirmación de envio"
    />,
    <OrderCard 
        color="#039DDD"
        iconSource={waitingPacking}
        title="40 órdenes"
        body="Esperando ser empaquetadas"
    />,
]

const revenue = <StatsCard
                    title="12.345.678"
                    body="Facturación"
                />
const sales = <StatsCard
                    title="400"
                    body="Ventas concretadas"
                />

const StyledScrollView = styled.ScrollView`
    flex: 0 0 100%;
    padding-left: 20px;
    padding-right: 20px;
`;

const Dashboard = () => {
    return (
        <SafeAreaView>
            <StyledScrollView>
                <OrdersHeader />
                <OrdersContainer data={orderListData} />
                <StatsHeader />
                <StatsContainer revenue={revenue} sales={sales} />
            </StyledScrollView>
        </SafeAreaView>
    )
}

export default Dashboard;