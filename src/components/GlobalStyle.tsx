import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  color: #272727;
  font-family: Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 10px;
  box-sizing: border-box;
  background-color: #E9E3E6;
}
`;

export default GlobalStyle;
