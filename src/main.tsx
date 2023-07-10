import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route } from 'wouter';

import Entry from '~/routers/Entry';
import './index.css';

const Router = () => {
  return (
    <>
      <Route path='/' component={Entry} />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
