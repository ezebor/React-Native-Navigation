import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  FlatList,
} from 'react-native';

const StyledDivider = styled.View.attrs(({ horizontal }) => ({
  width: horizontal === true ? 10 : 0,
}))`
  width: ${props => props.width};
  height: ${props => 10 - props.width};
`;

const CardContainer = ({ data, horizontal }) => {
  return (
    <FlatList 
      horizontal={horizontal}
      ItemSeparatorComponent={() => <StyledDivider horizontal={horizontal} />}
      data={ data }
      renderItem={({item}) => {
        return item;
      }}
      keyExtractor={(item) => item.key}
    />
  );
};

CardContainer.propTypes = {
  data: PropTypes.array,
  horizontal: PropTypes.bool,
};

CardContainer.defaultProps = {
  data: [],
  horizontal: false,
};

export default CardContainer;