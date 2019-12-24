import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.img.attrs(() => ({
  src: '/img/spinner.svg',
}))`
  height: 64px;
  animation: ${rotate} 0.5s steps(8, start) infinite;
`;

const Portal = ({ children }) => {
  const portal = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(portal);
    return () => {
      document.body.removeChild(portal);
    };
  });

  return ReactDOM.createPortal(children, portal);
};

const Loader = ({ visible }) => (
  visible && (
    <Portal>
      <Overlay>
        <Spinner />
      </Overlay>
    </Portal>
  )
);

export default Loader;
