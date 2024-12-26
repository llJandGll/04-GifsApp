import React, { useState } from 'react';
import { AddCategory, GiftGrid } from './components';

export const GiftExpertApp : React.FC = () => {
  const [categories, setCategories] = useState<Array<string>>([]);
  const [errorMessage, setErrorMessage] = useState("");
  

  const onNewCategory = ( newCategory : string ) : void  => {
    if ( categories.includes( newCategory )) {
      setErrorMessage('The category already exist');
      return;
    }
    setCategories( (category : Array<string>) => [ newCategory, ...category ]);
  }

  const handleError = ()   => {
    return {
      setErrorMessage : setErrorMessage,
      errorMessage : errorMessage
    }
  }

  return (
    <>
      <h1> GiftExpertApp </h1>
      <AddCategory 
        onNewCategory={ (value : string) => onNewCategory(value) }
        handleError={ handleError }
      />
      {
        categories.map( ( category ) => {
          return <GiftGrid key={ category } category ={ category } />
        })
      }
    </>
  )
}

