import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

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

const Modal = ({ open, content, onClose }) => (
  open && (
    <>
      <Portal>
        <Overlay>
          <div style={{ backgroundColor: '#fff' }}>
            { content }
          </div>
          <button type="button" onClick={onClose}>Close</button>
        </Overlay>
      </Portal>
    </>
  )
);

export default Modal;
