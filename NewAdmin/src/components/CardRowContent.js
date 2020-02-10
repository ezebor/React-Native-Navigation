import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledView = styled.View.attrs(({ alignType }) => ({
  alignContent: alignType ?? "flex-start",
}))`
  justifyContent: center;
  alignContent: ${props => props.alignContent};
  flex: 4;
  paddingTop: 10;
  paddingBottom: 25;
`;

const CardRowContent = ({ alignType, children }) => (
  <StyledView alignType={alignType}>
    { children }
  </StyledView>
);

CardRowContent.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  alignType: PropTypes.string,
};

CardRowContent.defaultProps = {
  children: [],
  alignType: 'flex-start',
};

export default CardRowContent;