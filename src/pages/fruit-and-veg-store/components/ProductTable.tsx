const ProductTable = () => {

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
          <ProductCategoryRow categoryLabel="Fruits" />
          <ProductRow price={10} name="banana" />
          <ProductRow price={10} name="apple" />
          <ProductRow price={10} name="mango" />
          <ProductCategoryRow categoryLabel="Vegetables" />
          <ProductRow price={10} name="spinach" />
        </tbody>
      </table>
    </>
  )

}
export default ProductTable;

interface ProdCatProps {
  categoryLabel:string
}
const ProductCategoryRow = ({categoryLabel}:ProdCatProps) => {
  return (
    <tr>
      <td colSpan={2}>{categoryLabel}</td>
    </tr>
  );
}

interface ProdProps {
  name:string,
  price:number
}
const ProductRow = ({price, name}:ProdProps) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  )
}