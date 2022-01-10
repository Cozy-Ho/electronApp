/* eslint-disable react/destructuring-assignment */
import React, { useReducer, Dispatch, useContext } from 'react';

type State = {
  token: string;
  test: string;
};

type Action = { type: 'token'; token: string } | { type: 'test'; test: string };
type AppDispatch = Dispatch<Action>;

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'token':
      sessionStorage.setItem('token', action.token);
      return { ...state, token: action.token };

    default:
      return state;
  }
};

// FIXME:
const AppStateContext = React.createContext<State>({ token: '', test: '' });
const AppDispatchContext = React.createContext<AppDispatch>(() => null);

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [appContext, dispatchApp] = useReducer(reducer, {
    token: '',
    test: '',
  });

  return (
    <AppStateContext.Provider value={appContext}>
      <AppDispatchContext.Provider value={dispatchApp}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

// state 와 dispatch 를 쉽게 사용하기 위한 커스텀 Hooks
export function useAppState(): State {
  const state = useContext(AppStateContext);
  return state;
}

export function useAppDispatch(): AppDispatch {
  const dispatch = useContext(AppDispatchContext);
  return dispatch;
}
