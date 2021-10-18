import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { setModalWindowGalleryOnFalse } from '../../redux';

import dataContext from '../../../../components/Data/dataContext';
import '../../../../styles/modalImg.scss';

function ModalImg({ flag, hideModalImg }) {
  const data = useContext(dataContext);
  const { classess } = data;
  const { gallery } = classess;
  return (
    <div className={gallery.modalImage}>
      <a onClick={hideModalImg}>&times;</a>
      <img alt="" />
    </div>
  )
};

const mapStateToProps = (state) => ({
  flag: state.modal,
})

const mapDispatchToProps = (dispatch) => ({
  hideModalImg: () => dispatch(setModalWindowGalleryOnFalse())
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalImg);