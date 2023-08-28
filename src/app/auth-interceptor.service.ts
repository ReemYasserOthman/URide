import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

export class AuthInterceptor implements HttpInterceptor {
    token = this.authService.getToken();
    constructor(private authService : AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        if(this.token){
            const clonedRequest = req.clone({
                // headers : req.headers.set('Authorization' , 'Bearer ' + this.token),
                setHeaders : {
                    'Content-Type': 'application/json',
                }
            });
            return next.handle(clonedRequest);
        }
        else {
            return next.handle(req);
        }
    }
}
