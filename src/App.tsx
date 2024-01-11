import { routes } from './router';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClinet = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClinet}>
      <RouterProvider router={routes} />
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
