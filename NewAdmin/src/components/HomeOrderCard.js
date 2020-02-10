import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import CardIcon from './CardIcon';
import CardContent from './CardContent';
import {
  Text,
} from 'react-native';

const HomeOrderCard = ({ icon, iconBackgroundColor, title, body }) => (
  <Card>
    <CardIcon source={icon} backgroundColor={iconBackgroundColor} shape="circle" />
    <CardContent>
      <Text>{title}</Text>
      <Text>{body}</Text>
    </CardContent>
  </Card>
);

HomeOrderCard.propTypes = {
  icon: PropTypes.element.isRequired,
  iconBackgroundColor: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
};

HomeOrderCard.defaultProps = {
  iconBackgroundColor: '#000000',
  title: 'Title',
  body: 'Body',
};

export default HomeOrderCard;
