import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Content from './Content';

const StyledCard = styled.View`
    border-style: solid;
    border-width: 1px;
    border-radius: 8px;
    border-color: grey;
    background-color: white;
    padding: 10px;
    flex: 0 0 50%;
`;

const StyledContainer = styled.View`
  flex-direction: row;
  flex: 0 0 auto;
`;

const Card = ({ title, body }) => (
  <StyledContainer>
    <StyledCard>
        <Content 
          title={title}
          body={body}
        />
    </StyledCard>
  </StyledContainer>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Card;