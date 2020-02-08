import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  View,
} from 'react-native';

const StyledView = styled.View.attrs(({ alignType }) => ({
  alignContent: alignType ?? "flex-start",
}))`
  justifyContent: center;
  alignContent: ${props => props.alignContent};
  flexBasis: 80%;
  flexGrow: 1;
  flexShrink: 1;
  paddingTop: 10;
  paddingBottom: 20;
  paddingHorizontal: 10;
`;

const CardContent = ({ alignType, children }) => (
  <StyledView alignType={alignType}>
    { children }
  </StyledView>
);

CardContent.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  alignType: PropTypes.string,
};

CardContent.defaultProps = {
  children: [],
  alignType: 'flex-start',
};

export default CardContent;