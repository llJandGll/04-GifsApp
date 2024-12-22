// GiftGrid.tsx
import React from "react";
import { CategoryProps, Gif } from "../interfaces";
import { GifItem } from "./GifItem";
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GiftGrid: React.FC<CategoryProps> = ({ category, onDeleteCategory }) => {
  const { gifs, isLoading } = useFetchGifs(category);
  console.log("GiftGrid render with category:", category);

  return (
    <>
      <h2>{category}</h2>
      <div className="crud__buttons">
        <button
          className="delete"
          onClick={() => onDeleteCategory(category)}
        >Delete Gifs</button>
      </div>
      <div className="card-grid">
        {isLoading && <p>Loading...</p>}
        {gifs.map((gif: Gif) => (
          <GifItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};