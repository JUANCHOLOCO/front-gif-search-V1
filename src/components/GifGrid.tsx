import { useEffect, useState } from 'react';
import {getGifs} from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';


interface Props{
 category:string
}

interface Api{
  id:string,
  title:string,
  url:string
}

export const GifGrid = ({ category}:Props) => {

  const [images, setImages] = useState<Api[]>([]);

  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
  }

  useEffect(() => {
    getImages();
  }, [])
  
    
  return (
    <>
        <h3>{category}</h3>
        <div className='card-grid'>
          {
            images.map(
              (image) => (
                   <GifGridItem key={image.id} title={image.title} url={image.url}/>     
              )
            )
          }
        </div>
    </>
    
  )
}
