import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  View,
} from 'react-native';

const StyledDivider = styled.View`
  height: 10px;
`;

const StyledContainer = styled.View`
  flex-direction: column;
  flex: 0 1 auto;
`;

const Container = ({ data }) => (
  <StyledContainer>
      {data.map((item, index) => {
        if(index >= (data.length - 1)){
          return item;
        }
        return (
          <View>
            {item}
            <StyledDivider/>
          </View>
        );
      })}
  </StyledContainer>
)

Container.propTypes = {
  data: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Container;