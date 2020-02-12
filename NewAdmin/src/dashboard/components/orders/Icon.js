import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { palette } from '../../../shared/styles';

const StyledView = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex: 0 1 20%;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

const StyledCardIcon = styled.Image`
  background-color: ${props => props.color};
  border-radius: 50px;
  width: 40px;
  height: 40px;
`;

const Icon = ({ color, source }) => (
  <StyledView>
    <StyledCardIcon 
      color={color}
      source={source}
    />
  </StyledView>
);

Icon.propTypes = {
  color: PropTypes.string,
  source: PropTypes.node.isRequired,
};

Icon.defaultProps = {
  color: palette.white,
};

export default Icon;