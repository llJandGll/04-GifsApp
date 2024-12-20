import { FormEvent, useState } from "react"
import { AddCategoryProps } from "../interfaces";
// import { Category } from "../../interfaces/CategoryInterface";


export const AddCategory : React.FC<AddCategoryProps> = ({ onNewCategory, handleError }) => {

  const [initialValue, setInitialValue] = useState("");
  const {errorMessage , setErrorMessage } = handleError();

  const onSubmit = ( event : FormEvent) : void  => {
    event.preventDefault();
    if( initialValue.trim().length === 0 ) {
      setErrorMessage('the field is empty');
      return;
    }

    // if( categories?.includes(initialValue) ) {
    //   setErrorMessage('La categoria ya existe');
    //   setInitialValue('');
    //   return;
    // }
    onNewCategory( initialValue.toLocaleLowerCase() );

    setInitialValue('');

  }

   
  const onAddCateryButton = ( ) : void  => {
    if( initialValue.trim().length === 0 ) {
      setErrorMessage('the field is empty');
      return;
    }
    onNewCategory( initialValue );
    setInitialValue('');
  }
  

  // onAddCategoryButton( initialValue );
  
  const onInputChange = ( { target } : FormEvent) : void  => {
    const { value } = target as HTMLInputElement;
    setInitialValue( value );
    
    setErrorMessage('');
  }
  
  
  return (
    <form onSubmit={ onSubmit }>
      <input 
       type="text" 
        placeholder="Buscar Gif"
        value={ initialValue }
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
