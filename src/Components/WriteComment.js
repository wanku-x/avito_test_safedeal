import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
  padding: 0 10px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 28px;
  color: #000;

  &::placeholder {
    opacity: 1;
    color: #ccc;
  }
`;

const WriteComment = () => (
  <>
    <InputStyled placeholder="Ваше имя" />
    <InputStyled placeholder="Ваш комментарий" />
  </>
);

export default WriteComment;
