import { useCallback, useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifts";
import { Gif } from "../interfaces";

export const useFetchGifs = ( category : string) => {

  const [gifs, setGifs] = useState<Gif[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const gifsSearched = useCallback( async () => {
    try {
      const gifs = await getGifs(category);
      setGifs(gifs);
      setIsLoading(false);
    } catch (error : unknown) {
      console.log('Error in', error)
    }
  }, [category]);



  useEffect(() => {

    gifsSearched();

  }, [gifsSearched]);
  
  return {
    gifs : gifs,
    isLoading : isLoading,
  }
}
