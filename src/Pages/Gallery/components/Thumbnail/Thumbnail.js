import React from "react";
import dataContext from "../../../../components/Data/dataContext";
import { connect } from 'react-redux';
import { setModalWindowGalleryOnTrue } from '../../redux';

class Thumbnail extends React.Component {

  static contextType = dataContext;

  clicked = (e) => {
    console.log(e.target);
  }

  render() {
    const { className, alt, src, setModalImg } = this.props;

    console.log(this.props.value);
    return (
      <img className={className} alt={alt} src={src} onClick={this.clicked} />
    )
  }
}

const mapStateToProps = (state) => ({
  value: state.modal
});
const mapDispatchToProps = (dispatch) => ({
  setModalImg: () => { dispatch(setModalWindowGalleryOnTrue()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Thumbnail);