const SET_MODAL_WINDOW_IMG_TRUE = 'gallery/modalImg-true';
const SET_MODAL_WINDOW_IMG_FALSE = 'gallery/modalImg-false';

export const setModalWindowGalleryOnTrue = () => ({ type: SET_MODAL_WINDOW_IMG_TRUE });
export const setModalWindowGalleryOnFalse = () => ({ type: SET_MODAL_WINDOW_IMG_FALSE });

const INITIAL_STATE = {
  modal: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MODAL_WINDOW_IMG_TRUE:
      return {
        modal: true,
      }
    case SET_MODAL_WINDOW_IMG_FALSE:
      return {
        modal: false,
      }
    default:
      return state;
  }
};