import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', 'sans-serif';
    overflow: hidden;
    text-decoration: none;
    outline: none;

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 4px;
  }

  *::-webkit-scrollbar-track {
    background: #202024;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #67f7bd;
    border-radius: 10px;
  }
  }

  html{
    display: flex;
    flex-direction: column;
    display: center;
    justify-content: center;
  }
`;
