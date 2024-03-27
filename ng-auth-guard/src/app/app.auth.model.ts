export class APIResponse {
   constructor(
    public Message:string,
    public StatusCode: number,
    public Records: Array<any>,
    public Record: any
   ){}
}

export class SecurityResponse {
  constructor(
    public Message:string,
    public Token:string,
    public IsLoggedIn:boolean
  ){}
}
