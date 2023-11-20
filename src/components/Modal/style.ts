import styled from 'styled-components';
import Button from '../Button';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  position: relative;
  background: #fff;
  padding: 20px;
  max-width: 80%;
  max-height: 80%;
  overflow-x: hidden;
  border-radius: 15px;
`;

export const CloseButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 16px;
  color: #fff;
`
export const Iframe = styled.iframe`
  width: 70vw;
  max-width: 800px;
  height: 60vh;
  max-height: 500px;
`
