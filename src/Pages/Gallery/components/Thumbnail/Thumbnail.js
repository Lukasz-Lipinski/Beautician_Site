import React from "react";
import { connect } from 'react-redux';
import { setModalWindowGalleryOnTrue } from '../../redux';

import dataContext from "../../../../components/Data/dataContext";

class Thumbnail extends React.Component {

  static contextType = dataContext;

  clicked = (e) => {
    this.props.showModalImg(e.target.alt);
  }

  render() {
    const { className, alt } = this.props;


    return (
      <img className={className} alt={alt} onClick={this.clicked} />
    )
  }
}

const mapStateToProps = (state) => ({
});
const mapDispatchToProps = (dispatch) => ({
  showModalImg: (alt) => { dispatch(setModalWindowGalleryOnTrue(alt)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Thumbnail);