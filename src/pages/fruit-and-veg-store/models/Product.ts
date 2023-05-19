export class Product {

  constructor (
    public category:string,
    public price:string,
    public stocked:boolean,
    public name:string
	){ }

	public static adapt(item:any) {
		return new Product(
			item.category,
			item.price,
			item.stocked,
      item.name
		)
	}
}