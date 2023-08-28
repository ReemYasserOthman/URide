import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenModel } from './login-model';


@Injectable({
  providedIn: 'root'
})


export class AuthService {
  
  _loginUser = "https://localhost:44369/api/Users/LogIn"
  constructor(private http:HttpClient) { }
  loginUser(user:any){
    return this.http.post<TokenModel>(this._loginUser , user);
  }

  getToken(){
    return localStorage.getItem('token')
  }
 
  
}