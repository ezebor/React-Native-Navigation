import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCard = styled.View`
    flexDirection: row;
    flex: 1;
    borderStyle: solid;
    borderWidth: 1;
    borderRadius: 8;
    borderColor: grey;
    background: white;
    paddingVertical: 10;
    paddingHorizontal: 10;
    flexBasis: auto;
`;

const CardRow = ({ children }) => (
    <StyledCard>
        { children }
    </StyledCard>
);

CardRow.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

CardRow.defaultProps = {
  children: [],
};

export default CardRow;
