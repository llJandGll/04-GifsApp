import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';


export const GiftExpertApp : React.FC = () => {

  const [categories, setCategories] = useState<Array<string>>([]);
  const [errorMessage, setErrorMessage] = useState("");


 const onNewCategory = ( newCategory : string ) : void  => {
  console.log(newCategory)

  if ( categories.includes( newCategory )) {
    setErrorMessage('The category already exist');
    return;
  }
  setCategories( (category : Array<string>) => [...category, newCategory]);
 }

 const handleError = ()   => {
    return {
    setErrorMessage : setErrorMessage,
    errorMessage : errorMessage
   }
  }



  return (
    <>
    {/* titulo */}
    <h1> GiftExpertApp </h1>
    {/* input */}
    
    <AddCategory 
      onNewCategory={ (value : string) => onNewCategory(value) }
      handleError={ handleError }
      // categories={ categories } 
      // setCategories={ setCategories }
    />




    
    <ol>
      {
        categories.map( ( category , index: number ) => {
          return (
            <li key={ index }>{ category }</li>
          )
        })
      }
    </ol>
    {/* listado de gifts */}

    </>
  )
}

