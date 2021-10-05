import React from "react";
import { CgMathPlus } from 'react-icons/cg';

import dataContext from "../../../components/Data/dataContext";
import ServicesListItem from "./ServicesListItem/ServicesListItem";

class ServicesList extends React.Component {
  static contextType = dataContext;

  render() {
    const { classess, servicesName } = this.context;
    const [title] = servicesName;
    return (
      <div>
        <h1>{servicesName.map(title => title.title)}</h1>
      </div>
    )
  }
}

export default ServicesList;