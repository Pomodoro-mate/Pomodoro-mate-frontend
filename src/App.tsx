import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';
import { routes } from './router';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App;
