import FilterableProductTable from "./components/FilterableProductTable";
import useProducts from "./hooks/useProducts";

const FruitAndVegStore = () => {

  const products = useProducts();

  return (
    <>
      <h1>Fruit & Veg Store</h1>
      <FilterableProductTable products={products}/>
    </>
  );

}
export default FruitAndVegStore;