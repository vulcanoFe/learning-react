import useProducts from "../hooks/useProducts";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const FilterableProductTable = () => {

  const products = useProducts();

  return(
    <>
      <SearchBar />
      <ProductTable />
    </>
  )
}
export default FilterableProductTable;