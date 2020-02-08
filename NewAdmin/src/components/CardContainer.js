import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Card from './Card';

const StyledCardContainer = styled.View.attrs(({ direction }) => ({
    flexDirection: direction,
}))`
  flexDirection: ${props => props.flexDirection};
  flexBasis: auto;
  justifyContent: center;
`;

const StyledDivider = styled.View.attrs(({ direction }) => ({
  width: direction === 'column' ? 0 : 10,
}))`
  width: ${props => props.width};
  height: ${props => 10 - props.width};
`;

const CardContainer = ({ children, direction }) => {
  const rows = [];
  children.forEach(item => {
    rows.push(item);
    rows.push(
        <StyledDivider 
            direction={direction} 
        />
    );
  });

  if (rows.length >= 2) {
    rows.pop(rows[rows.length - 1]);
  }

  return (
    <StyledCardContainer direction={direction}>
        {rows}
    </StyledCardContainer>
  );
};

CardContainer.propTypes = {
  children: PropTypes.element,
  direction: PropTypes.string,
};

CardContainer.defaultProps = {
  children: [<Card />, <Card />],
  direction: 'column',
};

export default CardContainer;