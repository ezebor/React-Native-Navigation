import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { palette } from '../shared/styles';

const StyledView = styled.View`
  justifyContent: flex-start;
  alignItems: center;
  flex: 1;
  paddingTop: 10;
`;

const StyledCardRowIcon = styled.Image.attrs(({ backgroundColor, shape }) => ({
  background: backgroundColor,
  radius: shape === 'circle' ? '50' : '8',
}))`
  background: ${props => props.background};
  borderRadius: ${props => props.radius};
  width: 40;
  height: 40;
  flexGrow: 0;
  flexShrink: 0;
`;

const CardRowIcon = ({ backgroundColor, shape, source }) => (
  <StyledView>
    <StyledCardRowIcon 
      backgroundColor={backgroundColor} 
      shape={shape} 
      source={source}
    />
  </StyledView>
);

CardRowIcon.propTypes = {
  shape: PropTypes.string,
  backgroundColor: PropTypes.string,
  source: PropTypes.element.isRequired,
};

CardRowIcon.defaultProps = {
  shape: 'square',
  backgroundColor: palette.white,
};

export default CardRowIcon;