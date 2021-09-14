import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { Provider } from 'mobx-react';
import store from '~/store';
import GlobalStyle from '~/styles/global';
import { ThemeProvider } from 'styled-components';

import { colors } from './theme';
const stores = { ...store };

const theme = {
  ...colors,
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider {...stores}>
      <GlobalStyle />
      <ToastContainer />
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
