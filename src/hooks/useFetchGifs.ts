import {useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

   
   interface Api{
     id:string,
     title:string,
     url:string
   }

export const useFetchGifs = (category:string) => {

    const [images, setImages] = useState<Api[]>([]);
    const [isLoading, setIsLoading] = useState( true);

    const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  }

  useEffect(() => {
    getImages();
  }, [])
  return {
    images,
    isLoading
    }
}

