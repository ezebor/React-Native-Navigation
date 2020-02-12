import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from './Icon';
import Content from './Content';
import { TouchableOpacity } from 'react-native-gesture-handler';

const StyledCard = styled.TouchableOpacity`
    flex-direction: row;
    border-style: solid;
    border-width: 1px;
    border-radius: 8px;
    border-color: grey;
    background-color: white;
    padding: 10px;
    flex: 0 0 auto;
`;

const Card = ({ color, iconSource, title, body }) => (
    <StyledCard>
        <Icon color={color} source={iconSource} />
        <Content 
          title={title}
          body={body}
        />
    </StyledCard>
);

Card.propTypes = {
  color: PropTypes.string.isRequired,
  iconSource: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Card;