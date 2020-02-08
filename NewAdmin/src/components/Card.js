import React from 'react';
import {
    View,
} from 'react-native';
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

const Card = ({ children }) => (
    <StyledCard>
        { children }
    </StyledCard>
);

Card.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

Card.defaultProps = {
  children: [],
};

export default Card;
