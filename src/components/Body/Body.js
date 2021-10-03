import { useParams } from 'react-router-dom';
import { Contact, Gallery, Home, PriceList, Reservation, SpecialOffers } from '../../Pages';
import { useCallback } from 'react';

function Body() {
  const { page } = useParams();

  const returnPage = useCallback((page) => {
    switch (page) {
      case "contact":
        return <Contact />
      case "pricelist":
        return <PriceList />
      case "gallery":
        return <Gallery />
      case "specialoffers":
        return <SpecialOffers />
      case "reservation":
        return <Reservation />
      default:
        return <Home />
    }
  }, [page]);

  return returnPage(page);
};

export default Body;