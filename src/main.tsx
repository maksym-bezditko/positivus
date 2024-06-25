import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/index.tsx';
import { GlobalStyles } from './styles/GlobalStyles.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <App />
    </ThemeProvider>
  </React.StrictMode>
);
