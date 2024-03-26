export class Category {
  constructor(public CatId:number, public CatName:string){}
}

export const CategoriesData = [
  {CatId:101,CatName:'C1'},
  {CatId:102,CatName:'C2'}
];


export class Product {
  constructor(public ProdId:number, public ProdName:string, public CatId:number){}
}

export const Products = [
  {ProdId:10001, ProdName:'P1',CatId:101},
  {ProdId:10002, ProdName:'P2',CatId:102},
  {ProdId:10003, ProdName:'P3',CatId:101},
  {ProdId:10004, ProdName:'P4',CatId:102}
];
