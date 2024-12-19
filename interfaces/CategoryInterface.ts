export interface Category  {
  categories? : Array<string>;
  setCategories : React.Dispatch<React.SetStateAction<string[]>>;
}