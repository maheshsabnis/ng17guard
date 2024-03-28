export class BFFModel {
  constructor(
    public CategoryId:string,
    public CategoryName: string,
    public ProductId: string,
    public ProductName: string,
    public Manufacturer: string,
    public Price: number,
    public Tax: number,
    public TotalPrice: number
  ){}
}
