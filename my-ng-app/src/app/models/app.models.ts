export class CategoryModel {
  constructor(
    public CategoryUniqueId:number,
    public CategoryId: string,
    public CategoryName: string,
    public BasePrice: number
  ){}
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
