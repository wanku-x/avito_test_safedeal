import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  display: block;
  padding: 0;
  width: 100%;
  border: none;
  background-color: transparent;
  transition: 0.2s ease-out 0s;
  font-size: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }

  &:active {
    transform: scale(0.99);
  }
`;

const ImageStyled = styled.img`
  width: 100%;
`;

const Picture = ({ src, openModal }) => (
  <ButtonStyled onClick={openModal}>
    <ImageStyled src={src} alt="" />
  </ButtonStyled>
);

Picture.propTypes = {
  src: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Picture;
