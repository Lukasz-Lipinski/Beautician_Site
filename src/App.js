import { Menu } from './components/Menu';
import { Route, Switch } from 'react-router-dom';

import { Contact, Gallery, Home, PriceList, Reservation, SpecialOffers } from './Pages/';
import './styles/style.scss';

function App() {
  return (
    <div className="container">
      <Menu className='nav' />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/pricelist' component={PriceList} />
        <Route path='/reservation' component={Reservation} />
        <Route path='/specialoffers' component={SpecialOffers} />
      </Switch>
    </div>
  );
}

export default App;
