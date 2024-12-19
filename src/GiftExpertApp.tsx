import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';


export const GiftExpertApp : React.FC = () => {

  const [categories, setCategories] = useState(['Goku','desnudas']);


  


  return (
    <>
    {/* titulo */}
    <h1> GiftExpertApp </h1>
    {/* input */}
    
    <AddCategory/>
 


    
    <ol>
      {
        categories.map( ( category , id: number ) => {
          return (
            <li key={ id }>{ category }</li>
          )
        })
      }
    </ol>
    {/* listado de gifts */}

    </>
  )
}

