import React from 'react';
import { AppContextProvider, RouteContextProvider } from 'renderer/context';

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppContextProvider>
      <RouteContextProvider>{children}</RouteContextProvider>
    </AppContextProvider>
  );
};

export default ContextProvider;
