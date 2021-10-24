import { useContext } from 'react';

import Link from './Link/Link';

import '../../styles/_variables.scss';
import dataContext from '../../components/Data/dataContext';

import '../../styles/pricelist.scss'
import ServicesList from './ServicesList/ServicesList';
import { Snackbar } from '../../components';

export default function PriceList() {
  const data = useContext(dataContext);
  const { servicesName, classess } = data;
  const { container } = classess;

  return (
    <>
      <div className={container}>
        <nav className={classess.pricelist.pricelistNavigation}>
          {servicesName.map((service, index) => (
            <Link key={`pricelist-button-${index}`} label={service.title} idIndicatedByLabel={service.title} />
          ))}
        </nav>
        <ServicesList />

      </div>
      <Snackbar />
    </>

  )
}