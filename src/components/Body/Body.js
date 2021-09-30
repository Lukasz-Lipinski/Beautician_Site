import { useParams } from 'react-router-dom';
import { Contact, Gallery, Home, PriceList, Reservation, SpecialOffers } from '../../Pages';

function Body() {
  const { page } = useParams();
  console.log(page);

  const returnPage = (page) => {
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
  }
  return (
    returnPage(page)
  )
};

export default Body;