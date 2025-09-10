import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Heebo', 'Assistant', 'Arial', sans-serif;
    direction: rtl;
    text-align: right;
}

body {
    background: linear-gradient(135deg, #f0f8e8 0%, #e8f5e8 50%, #d4edda 100%);
    min-height: 100vh;
}
* {
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
}
*::-webkit-scrollbar {
  width: 0.5px;
}
*::-webkit-scrollbar-track {
  background: transparent;
}
*::-webkit-scrollbar-thumb {
  background: rgba(155, 155, 155, 0.5);
  border-radius: 20px;
  border: transparent;
}
`;


export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  direction: rtl;
  text-align: right;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 25px;
  background: ${({ primary }) => (primary ? '#2d5016' : '#4a6741')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: 2px solid #a8d5a8;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(45, 80, 22, 0.2);
  
  &:hover {
    background: #a8d5a8;
    color: #2d5016;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(45, 80, 22, 0.3);
  }
  
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;


export default  GlobalStyles;   