import {  HttpInterceptor } from '@angular/common/http';
import { Injectable ,Injector } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  intercept(req : any, next : any){
    let autService = this.injector.get(AuthService)
    let tokenizedReq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${autService.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
