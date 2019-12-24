import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-grid-system';
import { Copyright } from './Typo';

const FooterStyled = styled.footer`
  flex-shrink: 0;
`;

const WrapStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 56px;
  border-top: 1px solid #ccc;
`;

const Footer = () => (
  <FooterStyled>
    <Container>
      <WrapStyled>
        <Copyright>© 2018-2019</Copyright>
      </WrapStyled>
    </Container>
  </FooterStyled>
);

export default Footer;
