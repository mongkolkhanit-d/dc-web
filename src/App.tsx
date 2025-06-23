import { useRoutes, type RouteObject } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import About from './pages/public-about/about';
import Home from './pages/public-home/home';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
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
