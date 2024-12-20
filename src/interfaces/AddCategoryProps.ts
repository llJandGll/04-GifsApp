export interface AddCategoryProps {

  onNewCategory: (category: string) => void;
  handleError : () => { setErrorMessage : ( error : string) => void, errorMessage : string };
}