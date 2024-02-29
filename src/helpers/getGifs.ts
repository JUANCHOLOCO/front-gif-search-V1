interface Images{
    downsized_medium:{
        url:string
    }
}
interface Data{
    id:string,
    title:string,
    images:Images
}
export const getGifs = async(category:string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=uL2XqoBDF9uEEmuE0LcmBSLL6AcaWxRi&q=${category}&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const res:Data[] = data
    const gifs = res.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
      
    }));
    console.log(gifs)
    return gifs;
}