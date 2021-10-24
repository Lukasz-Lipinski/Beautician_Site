import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import './styles/style.scss';

import dataContext from './components/Data/dataContext';
import data from './components/Data/data';

import { Home } from './Pages';
import { Menu, Footer, ModalImg, Spinner } from './components';



const Body = React.lazy(() => import('./components/Body/Body'));

function App({ isModalImgHidden }) {
  return (
    <div className="container">

      <dataContext.Provider value={data}>
        {isModalImgHidden && <ModalImg />}
        <Menu />

        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path='/:page' component={Body} />
            <Route path="*">
              <Home />
            </Route>
          </Switch>
        </Suspense>

      </dataContext.Provider>

      <Footer className="footer" />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isModalImgHidden: state.modal
});

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
