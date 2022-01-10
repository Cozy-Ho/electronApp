import { useRouteState } from 'renderer/context';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useRoute = () => {
  const navigate = useNavigate();
  const routeContext = useRouteState();
  const [route, setRoute] = useState({ path: '' });

  function changeRoute(path: string) {
    setRoute({ path: path });
    navigate(path);
  }

  useEffect(() => {
    if (routeContext.path) {
      setRoute(routeContext);
      navigate(routeContext.path);
    }
  }, [routeContext, navigate]);

  return [route || {}, changeRoute];
};

export { useRoute };
