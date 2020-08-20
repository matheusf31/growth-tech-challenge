import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  #root {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 20px;
   
  }

  body {
    background: #f0f0f7;
  }

  body,
  input,
  button,
  textarea {
    font: 500 1.6rem Roboto;
  }
`;

/* 










@media (min-width: 700px) {
  :root {
    font-size: 65%;
  }
} */
