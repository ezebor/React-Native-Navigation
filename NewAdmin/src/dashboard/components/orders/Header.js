import React from 'react';
import {
    Text,
} from 'react-native';
import styled from 'styled-components'

const StyledHeader = styled.Text`
    font-size: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
`;

const Header = () => (
    <StyledHeader>Prestá atención a estas órdenes</StyledHeader>
);

export default Header;