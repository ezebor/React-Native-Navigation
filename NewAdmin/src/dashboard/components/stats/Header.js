import React from 'react';
import {
    View,
} from 'react-native';
import styled from 'styled-components'
import { brandColors } from '../../../shared/styles';

const StyledHeader = styled.Text`
    font-size: 20px;
    padding: 30px 10px 30px 10px;
    text-align: center;
`;

const Divider = styled.View`
    background-color: ${brandColors.primaryBlue};
    height: 1px;
    margin-bottom: 10px;
    width: 30%;
`;

const Container = styled.View`
    align-items: center;
`;

const Header = () => (
    <Container>
        <StyledHeader>
            Estadísticas principales de tu tienda
        </StyledHeader>
        <Divider />
    </Container>
);

export default Header;