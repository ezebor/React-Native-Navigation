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
  flex: 4;
  paddingTop: 10;
  paddingBottom: 25;
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