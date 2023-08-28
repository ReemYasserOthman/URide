export class TokenModel {
    constructor(public email:string , public  expiresOn :string , public  id :string ,public  isAuthenticated :boolean ,public  isSuccess :boolean ,public  message :string ,public  roles :string[] , public  token :string ,public  username :string ,public  prototype :object ){
      
    }
}
