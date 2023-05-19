import { Product } from "../models/Product";

interface ProductTableProps {
  products:Product[]
}
const ProductTable = ({products}:ProductTableProps) => {

  let lastCategory = "";
  let rows:any[] = [];
  products.forEach((prod:Product) => {
    if (prod.category!==lastCategory) {
      rows.push(<ProductCategoryRow category={prod.category} key={prod.category} />);
    }
    rows.push(<ProductRow product={prod} key={prod.id}/>);
    lastCategory = prod.category;
  });

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
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