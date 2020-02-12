import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledDivider = styled.View`
  width: 10px;
`;

const StyledContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
`;

const Container = ({ revenue, sales }) => (
  <StyledContainer>
      {revenue}
      <StyledDivider/>
      {sales}
  </StyledContainer>
)

export default Container;