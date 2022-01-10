import React, { useReducer, Dispatch, useContext } from 'react';

type State = {
  path: string;
};

type Action = { type: 'path'; path: string };
type RouteDispatch = Dispatch<Action>;

const reducer = (state: State, action: Action) => {
  return state;
};

// FIXME:
const RouteStateContext = React.createContext<State>({ path: '' });
const RouteDispatchContext = React.createContext<RouteDispatch>(() => null);

export function RouteContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [routeContext, dispatchRoute] = useReducer(reducer, { path: '' });

  return (
    <RouteStateContext.Provider value={routeContext}>
      <RouteDispatchContext.Provider value={dispatchRoute}>
        {children}
      </RouteDispatchContext.Provider>
    </RouteStateContext.Provider>
  );
}

// state 와 dispatch 를 쉽게 사용하기 위한 커스텀 Hooks
export function useRouteState(): State {
  const state = useContext(RouteStateContext);
  return state;
}

export function useRouteDispatch(): RouteDispatch {
  const dispatch = useContext(RouteDispatchContext);
  return dispatch;
}
