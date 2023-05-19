import { Product } from "../models/Product";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

interface Props {
  products:Product[]
}

const FilterableProductTable = ({products}:Props) => {

  return(
    <>
      <SearchBar />
      <ProductTable products={products}/>
    </>
  )
}
export default FilterableProductTable;