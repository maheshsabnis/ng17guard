export class Product {
  [x:string]:any; // THis is indexer, used to help the TypeScript
                  // to use the Class Property Name (which is string)
                  // as indexer so that the value of the property
                  // can be read dynamically
  constructor(
    public ProductId: string,
    public ProductName: string,
    public Manufacturer: string,
    public Category: string,
    public Price: number
  ){}
}
