import { createBrowserRouter, RouterProvider as RRDRouterProvider } from 'react-router-dom';
import { HomePage } from '@pages/home';
import { AboutPage } from '@pages/about';
import { BaseLayout } from '@widgets/layouts/BaseLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
]);

export function RouterProvider() {
  return <RRDRouterProvider router={router} />;
}
