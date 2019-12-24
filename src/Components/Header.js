import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-grid-system';
import { Title } from './Typo';

const HeaderStyled = styled.header`
  flex-shrink: 0;
  padding-top: 15px;
  padding-bottom: 15px;
  text-transform: uppercase;
  text-align: center;
`;

const Header = () => (
  <HeaderStyled>
    <Container>
      <Title>Test App</Title>
    </Container>
  </HeaderStyled>
);

export default Header;
