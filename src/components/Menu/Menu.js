import { Route, Switch } from 'react-router-dom';

import Menu_links from './Menu_links';
import { Contact, Gallery, Home, PriceList, Reservation, SpecialOffers } from '../../Pages';
import linksName from '../Data/linksName';

export default function Menu({ className }) {
  return (
    <nav className={`${className}`}>
      <Menu_links />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/pricelist' component={PriceList} />
        <Route path='/reservation' component={Reservation} />
        <Route path='/specialoffers' component={SpecialOffers} />
      </Switch>
    </nav>
  )
}