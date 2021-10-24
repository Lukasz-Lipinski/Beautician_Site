import { useContext } from 'react';
import '../../styles/gallery.scss';

import dataContext from '../../components/Data/dataContext';
import Thumbnail from './components/Thumbnail/Thumbnail';
import { BackToTop } from '../../components';

function Gallery() {
  const data = useContext(dataContext);
  const { galleryImg } = data;

  return (
    <>
      <div className='container'>
        {galleryImg.map((img, index) => <Thumbnail key={`gallery-img-${index}`} className={`${img.className} gallery__${index}`} alt={`${img.alt}${index}`} />)}
      </div>

      <BackToTop />
    </>

  )
};

export default Gallery;