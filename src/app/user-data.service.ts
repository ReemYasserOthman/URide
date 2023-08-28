import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient , private auth : AuthService) { }
  getUserDate() : Observable<any>{
    return this.http.get(`https://localhost:44369/api/Users/GetByIdAsync?id=${this.auth.getToken()}`)
  }
}
