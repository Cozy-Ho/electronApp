import { useAppState, useRouteState, useRouteDispatch } from 'renderer/context';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Page } from 'renderer/types';

const WithRouter = ({ pages }: { pages: Array<any> }) => {
  const navigate = useNavigate();
  const appContext = useAppState();
  const routeContext = useRouteState();
  const dispatchRoute = useRouteDispatch();
  console.log('context >>>', appContext);
  console.log('routeContext >>>', routeContext);
  console.log('rkdwn pages', pages);
  return (
    <Routes>
      {pages.map((page: Page, index: number) => {
        const Component = page.component;
        console.log('rkdwn >>>', page, index);
        const token = appContext.token || sessionStorage.getItem('token');
        console.log(token);
        if (page.needToken && !token) {
          console.log('??? no token');
          // dispatchRoute({ type: 'path', path: '/ezBridge' });
          // history.push('/ezbridge');
          // return <Component />;
          // navigate('/');
        }
        return <Route key={index} path={page.path} element={<Component />} />;
      })}
    </Routes>
  );
};

export default WithRouter;
