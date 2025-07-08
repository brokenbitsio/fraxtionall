import { StrictMode } from 'react';
import { MantineProvider } from '@mantine/core';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import * as ReactDOM from 'react-dom/client';
import { theme } from '@fraxtionall/theme';

// All packages except `@mantine/hooks` require styles imports
// Add them as we go
import '@mantine/core/styles.css';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>
);
