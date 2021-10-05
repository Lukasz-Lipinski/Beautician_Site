import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import { Menu } from './components/Menu';
import dataContext from './components/Data/dataContext';
import data from './components/Data/data';

import './styles/style.scss';

const Body = React.lazy(() => import('./components/Body/Body'));

function App() {
  return (
    <div className="container">
      <dataContext.Provider value={data}>
        <Menu />

        <Suspense fallback="loading...">
          <Switch>
            <Route exact path='/:page' component={Body} />
          </Switch>
        </Suspense>
      </dataContext.Provider>

      <Footer className="footer" />
    </div>
  );
}

export default App;
