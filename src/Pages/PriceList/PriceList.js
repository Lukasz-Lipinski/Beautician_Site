import { useContext } from 'react';

import Link from './Link/Link';

import '../../styles/_variables.scss';
import dataContext from '../../components/Data/dataContext';

import '../../styles/pricelist.scss'
import ServicesList from './ServicesList/ServicesList';

export default function PriceList() {
  const data = useContext(dataContext);
  const { servicesName, classess } = data;

  return (
    <>
      <nav className={classess.pricelist.pricelistNavigation}>
        {servicesName.map((service, index) => (
          <Link key={`pricelist-button-${index}`} label={service.title} idIndicatedByLabel={service.title} />
        ))}
      </nav>

      <div>
        TABELA Z CENNIKIEM I USLUGAMI
        <ServicesList />
      </div>
    </>
  )
}