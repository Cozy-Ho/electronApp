import React from 'react';
import { render } from 'react-dom';

import Root from './Root';

render(
  <React.Suspense fallback={<h1>Connecting...</h1>}>
    <Root />
  </React.Suspense>,
  document.getElementById('root')
);
