import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {color} from '../../shared/styles';

const Text = styled.Text`
  font-size: 14px;
  font-weight: normal;
  color: ${color.textGray};
  text-decoration: ${props => (props.textDecoration ? 'line-through' : '')};
`;

const StyledCountRow = styled.View`
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 4px 16px;
  background-color: ${color.nubeWhite};
`;

const CountRow = ({children, textDecoration}) => {
  return (
    <StyledCountRow>
      <Text textDecoration={textDecoration}>{children}</Text>
    </StyledCountRow>
  );
};

CountRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  textDecoration: PropTypes.bool,
};

CountRow.defaultProps = {
  textDecoration: false,
};

export default CountRow;
