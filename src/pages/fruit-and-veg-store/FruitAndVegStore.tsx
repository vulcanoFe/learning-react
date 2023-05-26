import FilterableProductTable from "./components/FilterableProductTable";
import useProducts from "./hooks/useProducts";
import "./FruitAndVegStore.css";

const FruitAndVegStore = () => {

  const products = useProducts();

  return (
    <div className="container text-center" id="fevstore">
      <div className="row justify-content-center">
        <div className="col-3">
          <h1 className="pb-5">Fruit & Veg Store</h1>
          <FilterableProductTable products={products}/>
        </div>
      </div>
    </div>
  );

}
export default FruitAndVegStore;