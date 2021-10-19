const SET_MODAL_WINDOW_IMG_TRUE = 'gallery/modalImg-true';
const SET_MODAL_WINDOW_IMG_FALSE = 'gallery/modalImg-false';

export const setModalWindowGalleryOnTrue = (ImgNumber) => ({ type: SET_MODAL_WINDOW_IMG_TRUE, payload: ImgNumber });
export const setModalWindowGalleryOnFalse = () => ({ type: SET_MODAL_WINDOW_IMG_FALSE });

const INITIAL_STATE = {
  modal: false,
  ImgNumber: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MODAL_WINDOW_IMG_TRUE:
      return {
        modal: true,
        ImgNumber: action.payload,
      }
    case SET_MODAL_WINDOW_IMG_FALSE:
      return {
        modal: false,
        classNameImg: null,
      }
    default:
      return state;
  }
};