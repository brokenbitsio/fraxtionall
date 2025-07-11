import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { Button, MantineProvider } from '@mantine/core';
import { Header } from '../components/Header';

export const Route = createRootRoute({
  component: () => (
    <main>
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
    </main>
  ),
});
