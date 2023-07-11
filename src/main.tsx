import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Router } from 'wouter';

import Entry from '~/pages/Entry';
import { Navbar } from '~/components/layout/Navbar';
import './index.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route path='/' component={Entry} />
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
