import React from 'react'
import { Gif } from '../interfaces'

export const GifItem : React.FC<Gif> = ( { title, url }) => {
  return (
    <div className='card'>
    <img src={ url } alt={title} />
    <p>{title}</p>
  </div>
  )
}
