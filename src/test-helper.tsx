import type React from 'react';
import { render as originalRender } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function render(element: React.ReactElement) {
  return originalRender(<QueryClientProvider client={queryClient}>{element}</QueryClientProvider>);
}
