import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { palette } from '../shared/styles';
import waitingPayment from '../assets/ic_order_waiting_manual_confirmation.png';

const StyledView = styled.View`
  justifyContent: flex-start;
  alignContent: center;
  paddingTop: 10;
  paddingLeft: 20;
  flexBasis: 20%;
  flexShrink: 0;
  flexGrow: 0;
`;

const StyledCardIcon = styled.Image.attrs(({ backgroundColor, shape }) => ({
  background: backgroundColor,
  radius: shape === 'circle' ? '50' : '8',
}))`
  background: ${props => props.background};
  borderRadius: ${props => props.radius};
  flex: 1;
  flexGrow: 0;
  flexShrink: 0;
`;

const CardIcon = ({ backgroundColor, shape, image }) => (
  <StyledView>
    <StyledCardIcon 
      backgroundColor={backgroundColor} 
      shape={shape} 
      source={image}
    />
  </StyledView>
);

export default CardIcon;

CardIcon.propTypes = {
  shape: PropTypes.string,
  backgroundColor: PropTypes.string,
  source: PropTypes.element,
};

CardIcon.defaultProps = {
  shape: 'square',
  backgroundColor: palette.white,
  source: waitingPayment,
};
