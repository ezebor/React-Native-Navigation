import React from 'react';
import PropTypes from 'prop-types';
import CardRow from './CardRow';
import CardRowIcon from './CardRowIcon';
import CardRowContent from './CardRowContent';
import {
  Text,
} from 'react-native';

const PanelOrderCardRow = ({ icon, iconBackgroundColor, title, body }) => (
  <CardRow>
    <CardRowIcon source={icon} backgroundColor={iconBackgroundColor} shape="circle" />
    <CardRowContent>
      <Text>{title}</Text>
      <Text>{body}</Text>
    </CardRowContent>
  </CardRow>
);

PanelOrderCardRow.propTypes = {
  icon: PropTypes.element.isRequired,
  iconBackgroundColor: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
};

PanelOrderCardRow.defaultProps = {
  iconBackgroundColor: '#000000',
  title: 'Title',
  body: 'Body',
};

export default PanelOrderCardRow;
