export class Product {

  constructor (
    public id:string,
    public category:string,
    public price:string,
    public stocked:boolean,
    public name:string
	){ }

	public static adapt(item:any) {
		return new Product(
      item.id,
			item.category,
			item.price,
			item.stocked,
      item.name
		)
	}
}