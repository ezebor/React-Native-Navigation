import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  Text,
} from 'react-native';
import { brandColors } from '../../../shared/styles';

const StyledView = styled.View`
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  padding-top: 10px;
  padding-bottom: 25px;
`;

const StyledTitle = styled.Text`
  font-size: 20px;
  color: ${brandColors.primaryBlue};
  padding-bottom: 10px;
`;

const Content = ({ title, body }) => (
  <StyledView>
    <StyledTitle>
      ${title}
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