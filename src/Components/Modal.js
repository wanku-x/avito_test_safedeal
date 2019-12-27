import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';

const BodyOverflow = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const Overlay = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: auto;
`;

const ModalStyled = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 20px 10px;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: #fff;

  @media (min-width: 768px) {
    padding: 30px 20px;
    margin-top: 100px;
    margin-bottom: 100px;
    max-width: 620px;
    min-height: auto;
  }
`;

const CloseStyled = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 18px;
  width: 18px;
  border: none;
  background-color: transparent;
  background-image: url('/img/close.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
  z-index: 2000;
`;

const Portal = ({ children }) => {
  const portal = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(portal);
    return () => {
      document.body.removeChild(portal);
    };
  }, [portal]);

  return ReactDOM.createPortal(children, portal);
};

const Modal = ({ open, onClose, children }) => (
  open && (
    <>
      <Portal>
        <BodyOverflow />
        <Overlay>
          <ModalStyled>
            <CloseStyled type="button" onClick={onClose} />
            { children }
          </ModalStyled>
        </Overlay>
      </Portal>
    </>
  )
);

export default Modal;
