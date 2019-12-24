import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container } from 'react-grid-system';

const MainStyled = styled.main`
  flex-grow: 1;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const Main = ({ children }) => (
  <MainStyled>
    <Container>
      { children }
    </Container>
  </MainStyled>
);

Main.propTypes = {
  children: PropTypes.element,
};

Main.defaultProps = {
  children: null,
};

export default Main;
