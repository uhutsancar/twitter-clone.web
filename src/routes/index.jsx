// src/routes.jsx
import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '~/layouts/main';

// Reusable wrapper
const withSuspense = (Component) => <Suspense fallback={<div>Loading...</div>}><Component /></Suspense>;

// Lazy loaded pages
const Home = lazy(() => import('~/pages/home'));
const Explore = lazy(() => import('~/pages/explore'));
const Notification = lazy(() => import('~/pages/notifications'));
const Profile = lazy(() => import('~/pages/profile'));
const Bookmarks = lazy(() => import('~/pages/bookmarks'));
const Messages = lazy(() => import('~/pages/message'));
const Lists = lazy(() => import('~/pages/lists'));
const NotFound = lazy(() => import('~/pages/not-found'));

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: withSuspense(Home) },
      { path: 'explore', element: withSuspense(Explore) },
      { path: 'notification', element: withSuspense(Notification) },
      { path: 'bookmarks', element: withSuspense(Bookmarks) },
      { path: 'messages', element: withSuspense(Messages) },
      { path: 'lists', element: withSuspense(Lists) },
      { path: ':sluq', element: withSuspense(Profile) }, // Dynamic route
      { path: '*', element: withSuspense(NotFound) },    // 404 fallback
    ],
  },
]);

export default routes;
