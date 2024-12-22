import React from "react";

import { CategoryProps, Gif } from "../interfaces";
import { GifItem } from "./GifItem";
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GiftGrid: React.FC<CategoryProps> = ({ category }) => {

  const { gifs , isLoading } = useFetchGifs( category );
 
  
  return (
    <>
      <h2>{ category }</h2>

      <div className="card-grid">
        
        {
          isLoading && <p>Loading...</p>
        }
        {
          gifs.map(( gif : Gif) => (
              <GifItem key={ gif.id } {...gif} />
            ))
        }
      </div>
    </>
  );
};
