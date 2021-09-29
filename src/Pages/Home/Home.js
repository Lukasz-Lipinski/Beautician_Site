import MenuCards from "../../components/Body/Cards/MenuCards";
import classess from '../Data/classess';
import '../../styles/sites.scss';

export default function Home() {
  return (
    <div className={classess.sites}>
      <MenuCards />
    </div>
  )
}