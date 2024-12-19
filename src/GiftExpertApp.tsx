import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';


export const GiftExpertApp : React.FC = () => {

  const [categories, setCategories] = useState(['goku','desnudas']);


  // const onAddCategory = ( newCategory : string) : void  => {
  
  //   setCategories( (category : Array<string>) => [...category, newCategory]);
  // }
  

  


  return (
    <>
    {/* titulo */}
    <h1> GiftExpertApp </h1>
    {/* input */}
    
    <AddCategory categories={ categories } setCategories={ setCategories }/>
 
    <button type="button"
      // onClick={ () => onAddCategory() }
    >
      Add Category
    </button>
 


    
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

