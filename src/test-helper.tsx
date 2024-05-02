import type React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render as originalRender } from '@testing-library/react';

const queryClient = new QueryClient();

const theme = createTheme();

export function render(element: React.ReactElement) {
  return originalRender(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </QueryClientProvider>,
  );
}
