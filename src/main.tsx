import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Router } from 'wouter';

import { Navbar } from '~/components/layout/Navbar';
import Entry from '~/pages/Entry';
import List from '~/pages/List';
import './index.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route path='/' component={Entry} />
      <Route path='/list' component={List} />
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
