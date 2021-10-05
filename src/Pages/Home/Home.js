import { useContext } from "react";
import MenuCards from "../../components/Body/Cards/MenuCards";
import dataContext from "../../components/Data/dataContext";
import '../../styles/sites.scss';

export default function Home() {
  const data = useContext(dataContext);
  const { classess } = data;
  return (
    <div className={classess.container}>
      <MenuCards />
    </div>
  )
}