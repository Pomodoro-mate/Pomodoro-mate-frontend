import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle.ts';
import darkTheme from './styles/darkTheme.ts';
import defaultTheme from './styles/defaultTheme.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Reset } from 'styled-reset';
// type BuildProvidersTreeProps = {
//   componentsWithProps :
// }
// const buildProvidersTree = (componentsWithProps:{}) => {
//   const initialComponent = ({ children }: {children:ReactNode}) => <>{children}</>;
//   return componentsWithProps.reduce((AccumulatedComponents, [Provider, props = {}]) => {
//     return ({ children }: {children:ReactNode}) => {
//       return (
//         <AccumulatedComponents>
//           <Provider {...props}>{children}</Provider>
//         </AccumulatedComponents>
//       );
//     };
//   }, initialComponent);
// };
// const ProvidersTree = buildProvidersTree([[QueryClientProvider, { client: queryClinet }]]);
const mode = 'light';
const theme = mode === 'dark' ? darkTheme : defaultTheme;
const queryClinet = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClinet}>
      <ThemeProvider theme={theme}>
        <Reset />
        <GlobalStyle />
        <App />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
    </QueryClientProvider>
  </React.StrictMode>,
);
