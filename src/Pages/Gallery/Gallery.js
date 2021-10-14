import { useContext } from 'react';
import dataContext from '../../components/Data/dataContext';
import Thumbnail from './components/Thumbnail/Thumbnail';
import '../../styles/gallery.scss';

export default function Gallery() {
  const data = useContext(dataContext);
  const { galleryImg } = data;

  return (
    <div className='container'>
      {galleryImg.map(img => <Thumbnail className={img.className} alt={img.alt} />)}
    </div>
  )
}