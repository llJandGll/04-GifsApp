import axios from "axios";
import { GifData } from "../interfaces";
import { Gif } from "../interfaces/Gif";

export const getGifs = async (category: string) : Promise<Gif[]> => {
  const url : string = `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_API_KEY}&q=${category}&limit=10`;
  const { data } = await axios.get( url );
  const { data : gifs} = data;
  const arrayGifs : Gif[]= gifs.map( (gif : GifData) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));
  return arrayGifs;

}
