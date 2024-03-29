import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  #root {
    padding:0 !important; ;
  }
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  body {
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    background-color: inherit;
  }
  a:disabled, button:disabled {
    cursor: not-allowed;
  }
  a:enabled, button:enabled {
    cursor: pointer;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600 !important;
  }
  iframe[style*="z-index: 2147483647"] {
  display: none;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
`;
