import { Product } from "./Product";

export class ProductsResponse {

  constructor (
    public products: Product[] = []
	){ }

	public static adapt(item:any) {
    const products:Product[] = []
    item.forEach((elem:any) => { products.push(Product.adapt(elem)) });
		return new ProductsResponse(
      products
		)
	}
}