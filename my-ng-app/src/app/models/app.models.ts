export class CategoryModel {
  constructor(
    public CategoryUniqueId:number,
    public CategoryId: string,
    public CategoryName: string,
    public BasePrice: number
  ){}
}

export class ProductModel {
  constructor(
     public ProductUniqueId:number,
     public ProductId:string,
     public ProductName:string,
     public Manufacturer:string,
     public Price:number,
     public CategoryUniqueId:number
  ){

  }
}

///class for Receiving Http Response after the API Call
export class APIResponse<T> {
  constructor(
    public Message:string,
    public StatucCode: number,
    public Records: Array<T>,
    public Record: T
  ){}
}
