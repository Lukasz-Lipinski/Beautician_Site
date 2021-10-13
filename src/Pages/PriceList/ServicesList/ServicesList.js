import React from "react";
import { CgMathPlus } from 'react-icons/cg';

import dataContext from "../../../components/Data/dataContext";
import ServicesListItem from "./ServicesListItem/ServicesListItem";

class ServicesList extends React.Component {
  static contextType = dataContext;

  render() {
    const { classess, faceProcedurs, aestheticMedicineProcedures, bodyProcedures, spaProcedures, palmsAndTailsProcedures, hairutsProcedures } = this.context;
    const { pricelist } = classess;

    return (
      <ul className={pricelist.serviceList}>
        {faceProcedurs.map((procedure, index) => {
          if (procedure.title) {
            return <h1 id={`#${procedure.title}`} key={`h1-${procedure.title}-${index}`}>{procedure.title}</h1>
          } else {
            return <ServicesListItem key={`listItem-${procedure.title}-${index}`} procedure={procedure} />
          }
        })}
        {aestheticMedicineProcedures.map((procedure, index) => {
          if (procedure.title) {
            return <h1 id={`${procedure.title}`} key={`h1-${procedure.title}-${index}`}>{procedure.title}</h1>
          } else {
            return <ServicesListItem key={`listItem-${procedure.title}-${index}`} procedure={procedure} />
          }
        })}
        {bodyProcedures.map((procedure, index) => {
          if (procedure.title) {
            return <h1 id={`${procedure.title}`} key={`h1-${procedure.title}-${index}`}>{procedure.title}</h1>
          } else {
            return <ServicesListItem key={`listItem-${procedure.title}-${index}`} procedure={procedure} />
          }
        })}
        {spaProcedures.map((procedure, index) => {
          if (procedure.title) {
            return <h1 id={`${procedure.title}`} key={`h1-${procedure.title}-${index}`}>{procedure.title}</h1>
          } else {
            return <ServicesListItem key={`listItem-${procedure.title}-${index}`} procedure={procedure} />
          }
        })}
        {palmsAndTailsProcedures.map((procedure, index) => {
          if (procedure.title) {
            return <h1 id={`${procedure.title}`} key={`h1-${procedure.title}-${index}`}>{procedure.title}</h1>
          } else {
            return <ServicesListItem key={`listItem-${procedure.title}-${index}`} procedure={procedure} />
          }
        })}
        {hairutsProcedures.map((procedure, index) => {
          if (procedure.title) {
            return <h1 id={`${procedure.title}`} key={`h1-${procedure.title}-${index}`}>{procedure.title}</h1>
          } else {
            return <ServicesListItem key={`listItem-${procedure.title}-${index}`} procedure={procedure} />
          }
        })}
      </ul>
    )
  }
}

export default ServicesList;