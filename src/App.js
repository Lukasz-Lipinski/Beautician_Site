import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';


import Footer from './components/Footer/Footer';
import { Menu } from './components/Menu';
import { ModalImg } from './Pages/Gallery/components/ModalImg';

import dataContext from './components/Data/dataContext';
import data from './components/Data/data';

import './styles/style.scss';


const Body = React.lazy(() => import('./components/Body/Body'));

function App({ isModalImgHidden }) {
  return (
    <div className="container">
      <dataContext.Provider value={data}>
        {isModalImgHidden && <ModalImg />}

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

const mapStateToProps = (state) => ({
  isModalImgHidden: state.modal
});

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
