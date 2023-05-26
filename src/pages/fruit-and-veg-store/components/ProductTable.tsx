import { Product } from "../models/Product";

interface Props {
  products:Product[],
  filterText:string,
  inStockOnly:boolean
}
const ProductTable = ({products, filterText, inStockOnly}:Props) => {

  const rows:any[] = [];
  let lastCategory = "";

  products.forEach((prod:Product) => {
    if(applyFilter(prod)) {
      if (prod.category!==lastCategory) {
        rows.push(<ProductCategoryRow category={prod.category} key={prod.category} />);
      }
      rows.push(<ProductRow product={prod} key={prod.id}/>);
      lastCategory = prod.category;
    }
  });

  /**
   * @param product 
   * @returns boolean true if product must be display after evaluate applied filters
   */
  function applyFilter(product:Product):boolean {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return false;
    }
    if (inStockOnly && !product.stocked) {
      return false;
    }
    return true;
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </>
  )

}
export default ProductTable;

interface ProdCatProps {
  category:string
}
const ProductCategoryRow = ({category}:ProdCatProps) => {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}

interface ProdProps {
  product:Product
}
const ProductRow = ({product}:ProdProps) => {

  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}