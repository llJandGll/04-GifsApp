import React, { useCallback, useEffect, useState } from "react";

import { CategoryProps, Gif } from "../interfaces";
import { getGifs } from "../helpers/getGifts";
import { GifItem } from "./GifItem";

export const GiftGrid: React.FC<CategoryProps> = ({ category }) => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  

   const gifsSearched = useCallback( async () => {
    const gifs = await getGifs(category);
    setGifs(gifs);
   }, [category]);


  useEffect(() => {

    gifsSearched();

  }, [gifsSearched]);
  
  return (
    <>
      <h2>{ category }</h2>

      <div className="card-grid">
        {
          gifs.map(( gif : Gif) => (
            <GifItem key={ gif.id } {...gif} />
          ))
        }
      </div>
    </>
  );
};
