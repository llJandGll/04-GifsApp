import { FormEvent, useState } from "react"
import { AddCategoryProps } from "../interfaces";
// import { Category } from "../../interfaces/CategoryInterface";


export const AddCategory : React.FC<AddCategoryProps> = ({ onNewCategory, handleError }) => {

  const [searchInputValue, setSearchInputValue] = useState("");
  const {errorMessage , setErrorMessage } = handleError();

  const onSubmit = ( event : FormEvent) : void  => {
    event.preventDefault();
    
    inputValidation( searchInputValue );

    onNewCategory( searchInputValue.toLocaleLowerCase() );

    setSearchInputValue('');

  }

  const inputValidation = ( inputValue : string ) : void => {
    if( inputValue.trim().length === 0 ) {
      setErrorMessage('the field is empty');
      return;
    }
  }
   
  const onAddCateryButton = ( ) : void  => {
   inputValidation( searchInputValue );
    onNewCategory( searchInputValue );
    setSearchInputValue('');
  }
  

  const onInputChange = ( { target } : FormEvent) : void  => {
    const { value } = target as HTMLInputElement;
    setSearchInputValue( value );
    
    setErrorMessage('');
  }
  
  
  return (
    <form onSubmit={ onSubmit }>
      <input 
       type="text" 
        placeholder="Buscar Gif"
        value={ searchInputValue }
        onChange={ onInputChange }
      />
      
    {
      errorMessage && <p>{ errorMessage }</p>
    }
       

    <button type="button"
      onClick={ () => onAddCateryButton() }
    >
      Add Category
    </button>
 
    </form>
  )
}
