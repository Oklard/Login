import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5f5;
    align-items: center
    ;
  }
`;
export const Button = styled.button`
  width: 90px;
  height: 40px;
  border-radius: 5px;
  align-content: center;
  display: flex;
  flex-direction: column;
  color: white;
  margin: auto;
  margin-top: 10px;
  :hover {
    cursor: pointer;
    box-shadow: black 5px;
  }
`;

export const Quadrado = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 120px;
  width: 550px;
  height: 450px;
  left: 400px;
  top: 120px;
  background: #ffffff;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;
export default GlobalStyle;
