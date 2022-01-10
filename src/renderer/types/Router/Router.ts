import React from 'react';

export interface Page {
  path: string;
  title: string;
  component: () => React.ReactElement;
  needToken: boolean;
}
