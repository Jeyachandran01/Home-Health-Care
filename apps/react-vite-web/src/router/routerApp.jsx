import { Layout, PageNotFound, RootLayout } from '@core/ui/components';
import Home from '@pages/home';
import Login from '@pages/login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { appRoutes } from '@core/routes';
import { ErrorBoundary } from '../pages/errorBoundary';
import { PrivateRouter } from './privateRouter';

// const pathSlicer = (path, sliceStart = 1) => path.slice(sliceStart);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: (
          <PrivateRouter>
            <Layout>
              <Home />
            </Layout>
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: appRoutes?.login,
    errorElement: <ErrorBoundary />,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  {
    path: '*',
    errorElement: <ErrorBoundary />,
    element: <PageNotFound />,
  },
]);

export function RouterApp() {
  return <RouterProvider router={router} />;
}
