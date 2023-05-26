import { useState } from "react";
import { Product } from "../models/Product";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

interface Props {
  products:Product[]
}

const FilterableProductTable = ({products}:Props) => {

  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return(
    <div className="row">
      <div className="col">
        <SearchBar 
          filterText={filterText} 
          inStockOnly={inStockOnly} 
          onFilterTextChange={setFilterText}
          onInStockOnlyChange={setInStockOnly} />
        <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
      </div>
    </div>
  )
}
export default FilterableProductTable;