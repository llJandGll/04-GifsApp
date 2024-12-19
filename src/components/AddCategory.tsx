import { FormEvent, useState } from "react"
import { Category } from "../../interfaces/CategoryInterface";

export const AddCategory : React.FC<Category> = ({ categories, setCategories }) => {

  const [initialValue, setInitialValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = ( event : FormEvent) : void  => {
    event.preventDefault();
    if( initialValue.trim().length === 0 ) {
      setErrorMessage('The field is empty');
      return;
    }

    if( categories?.includes(initialValue) ) {
      setErrorMessage('La categoria ya existe');
      setInitialValue('');
      return;
    }
    setCategories( (category : Array<string>) => [...category, initialValue.toLocaleLowerCase()]);

    setInitialValue('');
    setErrorMessage('');

  }
  
  const onInputChange = ( { target } : FormEvent) : void  => {
    const { value } = target as HTMLInputElement;
    setInitialValue( value );
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
    </form>
  )
}
