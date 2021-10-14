import React from "react";
import dataContext from "../../../../components/Data/dataContext";

class Thumbnail extends React.Component {

  static contextType = dataContext;

  render() {
    const { className, alt, src } = this.props;
    return (
      <img className={className} alt={alt} src={src} />
    )
  }
}

export default Thumbnail;