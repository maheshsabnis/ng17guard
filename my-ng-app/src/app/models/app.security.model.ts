export class AppUser {
  constructor(
    public Email:string,
    public Password: string,
    public ConfirmPassword:string
  ){}
}


export class LoginUser {
  constructor(
    public Email:string,
    public Password: string
  ){}
}

export class SecurityResponse {
  constructor(public Message:string,
    public Token: string,
    public IsLoggedIn: boolean
  ){}
}
