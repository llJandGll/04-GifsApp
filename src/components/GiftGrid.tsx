import React, { useEffect, useState } from "react";
import { CategoryProps, Gif } from "../interfaces";
import { getGifs } from "../helpers/getGifts";

export const GiftGrid: React.FC<CategoryProps> = ({ category }) => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  console.log("se disparo el componente GiftGrid con categoría:", category);
  
  const gifsSearched = async () => {
    const gifs = await getGifs(category);
    console.log(gifs)
    console.log("se disparo el useEffect con categoría:", category);
    setGifs(gifs);
  };


  useEffect(() => {

    gifsSearched();

  }, []);
  
  return (
    <div>
      <h1>{ category }</h1>
      {
        gifs.map(( { id, title, url } : Gif) => (
          <div key={id}>
            <img src={ url } alt={title} />
            <p>{title}</p>
          </div>
        ))
      }
    </div>
  );
};
