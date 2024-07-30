import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';
import { routes } from './router';

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
