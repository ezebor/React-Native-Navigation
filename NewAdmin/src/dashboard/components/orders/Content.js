import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  Text,
} from 'react-native';

const StyledView = styled.View`
  justify-content: center;
  align-content: flex-start;
  flex: 0 1 80%;
  padding-top: 10px;
  padding-bottom: 25px;
`;

const StyledTitle = styled.Text`
  font-weight: bold;
`;

const Content = ({ title, body }) => (
  <StyledView>
    <StyledTitle>
      {title}
    </StyledTitle>
    <Text>
      {body}
    </Text>
  </StyledView>
);

Content.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Content;