import EzBridge from './EzBridge';
import EzDentWeb from './EzDentWeb';
import MainPage from './MainPage';

const pages = [
  {
    path: '/ezbridge',
    title: 'EzBridge',
    component: EzBridge,
    needToken: true,
  },
  {
    path: '/ezdentweb',
    title: 'EzDentWeb',
    component: EzDentWeb,
    needToken: true,
  },
  {
    path: '/',
    title: 'test title',
    component: MainPage,
    needToken: false,
  },
];

export default pages;
