import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Switch } from 'wouter';

import { Navbar } from '~/components/layout/Navbar';
import Entry from '~/pages/Entry';
import List from '~/pages/List';
import Edit from '~/pages/Edit';
import PageNotFound from '~/pages/404';

import './index.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' component={Entry} />
        <Route path='/list' component={List} />
        <Route path='/edit/:id'>{params => <Edit id={params.id} />}</Route>
        <Route path='/:rest*' component={PageNotFound} />
      </Switch>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
