import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', 'sans-serif';
    overflow-x: hidden;
    overflow-y: auto;
    text-decoration: none;
    outline: none;
  }

  html{
    display: flex;
    flex-direction: column;
    display: center;
    justify-content: center;
  }
`;
