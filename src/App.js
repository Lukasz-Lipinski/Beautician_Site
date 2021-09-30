import { Menu } from './components/Menu';
import { Route, Switch } from 'react-router-dom';

import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import { Home } from './Pages';

import './styles/style.scss';


function App() {
  return (
    <div className="container">
      <Menu className='nav' />

      <Switch>
        <Route exact path='/:page' component={Body} />
      </Switch>

      <Footer className="footer" />
    </div>
  );
}

export default App;
