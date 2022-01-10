import { Suspense } from 'react';
import App from './App';
import { ContextProvider } from './context';

const Root = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Suspense>
  );
};

export default Root;
