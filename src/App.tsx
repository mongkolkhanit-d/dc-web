import { useRoutes, type RouteObject } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { path: '', element: <>Public-home</> },
      { path: 'about', element: <>Public-about</> },
      { path: 'contact', element: <>Public-contact</> },
    ],
  },
  {
    path: '*',
    element: <>NotFound</>,
  },
];

function App() {
  const element = useRoutes(routes);
  return element;
}

export default App;
