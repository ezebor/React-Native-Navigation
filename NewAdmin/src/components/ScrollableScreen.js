import React, { Component } from 'react';
import {
    ScrollView,
    Text,
} from 'react-native';

import styled from 'styled-components';

const StyledScrollView = styled.ScrollView`
  flex: 1;
  marginHorizontal: 24;
  marginTop: 12;
`;

const ScrollableScreen = ({ children }) => (
    <StyledScrollView>
        { children }
    </StyledScrollView>
);

export default ScrollableScreen;