import React, { Component } from 'react';
import {
    ScrollView,
    Text,
} from 'react-native';

import styled from 'styled-components';

const StyledScrollView = styled.ScrollView`
  flex: 1;
  marginHorizontal: 24;
  backgroundColor: red;
  marginTop: 12;
`;

const Screen = ({ children }) => (
    <StyledScrollView>
        { children }
    </StyledScrollView>
);

export default Screen;