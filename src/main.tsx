import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle.ts';
import darkTheme from './styles/darkTheme.ts';
import defaultTheme from './styles/defaultTheme.ts';

const mode = 'dark';
const theme = mode === 'dark' ? darkTheme : defaultTheme;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
