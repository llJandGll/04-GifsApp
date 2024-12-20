export interface CategoryProps  {
  categories? : Array<string>;
  setCategories : React.Dispatch<React.SetStateAction<string[]>>;
}