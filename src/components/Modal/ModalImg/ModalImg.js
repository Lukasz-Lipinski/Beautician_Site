import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { setModalWindowGalleryOnFalse } from '../../../Pages/Gallery/redux';

import dataContext from '../../Data/dataContext';
import '../../../styles/modalImg.scss';

function ModalImg({ hideModalImg, ImgNumber }) {
  const data = useContext(dataContext);
  const { classess } = data;
  const { gallery } = classess;
  return (
    <div className={gallery.modalImage}>
      <a onClick={hideModalImg}>&times;</a>
      <img className={ImgNumber} alt={ImgNumber} />
    </div>
  )
};

const mapStateToProps = (state) => ({
  ImgNumber: state.ImgNumber,
})

const mapDispatchToProps = (dispatch) => ({
  hideModalImg: () => dispatch(setModalWindowGalleryOnFalse())
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalImg);