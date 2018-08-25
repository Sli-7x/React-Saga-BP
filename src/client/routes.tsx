import * as React from 'react';
import * as Loadable from 'react-loadable';

function loading(props: any) {
  let comp: any = null;
  if (props.error) {
    comp = <div>Error!</div>;
  } else if (props.pastDelay) {
    comp = <div>Loading...</div>;
  }

  return comp;
}

const Error404 = Loadable({
  loading,
  loader: () => import('./components/errors/Error404'),
  delay: 300,
});

const AboutPage = Loadable({
  loading,
  loader: () => import('./pages/about/AboutPage'),
  delay: 300,
});

const HomePage = Loadable({
  loading,
  loader: () => import('./pages/home/HomePage'),
  delay: 300,
});

const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/about',
    exact: true,
    component: AboutPage,
  },
  {
    path: '*',
    component: Error404,
    status: 404,
  },
];

export default routes;
