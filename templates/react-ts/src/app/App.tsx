import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@app/providers/router';
import { queryClient } from '@shared/api/query-client';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider />
    </QueryClientProvider>
  );
}
