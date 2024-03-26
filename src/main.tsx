import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

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

const queryClinet = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClinet}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
    </QueryClientProvider>
  </React.StrictMode>,
);
